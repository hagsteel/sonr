use std::io;

use crossbeam::deque::{Worker, Stealer, Steal}; 
use mio::{Poll, Event, Evented, Ready, PollOpt, Token};

use crate::sync::signal::{SignalReceiver, SignalSender}; 
use crate::reactor::{Reactive, EventedReactor, Reaction};
use crate::errors::Result;

use super::Capacity;

// -----------------------------------------------------------------------------
// 		- Reactive queue -
// -----------------------------------------------------------------------------
pub struct ReactiveQueue<T> {
    inner: Queue<T>,
}

impl<T: Send + 'static> ReactiveQueue<T> { 
    pub fn unbounded() -> Self {
        Self {
            inner: Queue::unbounded(),
        }
    }

    pub fn bounded(capacity: usize) -> Self {
        Self {
            inner: Queue::bounded(capacity),
        }
    }

    pub fn push(&self, val: T) {
        self.inner.push(val);
    }

    pub fn deque(&mut self) -> Dequeue<T> {
        self.inner.deque()
    }
}

impl<T: Send + 'static> Reactive for ReactiveQueue<T> {
    type Output = ();
    type Input = T;

    fn reacting(&mut self, _: Event) -> bool {
        // The queue can never react to an event
        // as it is not evented
        false
    } 

    fn react_to(&mut self, value: Self::Input) {
        self.push(value);
    }

    fn react(&mut self) -> Reaction<Self::Output> {
        Reaction::Value(())
    }
}


// -----------------------------------------------------------------------------
// 		- Queue -
// -----------------------------------------------------------------------------
pub struct Queue<T> {
    worker: Worker<T>,
    inner_stealer: Stealer<T>,
    publishers: Vec<SignalSender<()>>,
    capacity: Capacity,
}

impl<T: Send + 'static> Queue<T> {
    fn new_with_capacity(capacity: Capacity) -> Self {
        let worker = Worker::new_lifo();
        let inner_stealer = worker.stealer();

        Self { 
            worker,
            inner_stealer,
            publishers: Vec::new(),
            capacity,
        }
    }

    pub fn unbounded() -> Self {
        Self::new_with_capacity(Capacity::Unbounded)
    }

    pub fn bounded(cap: usize) -> Self {
        Self::new_with_capacity(Capacity::Bounded(cap))
    }

    pub fn push(&self, val: T) {
        self.worker.push(val);
        // Notify all
        self.publishers.iter().for_each(|p| { let _ = p.send(()); });
    }

    pub fn deque(&mut self) -> Dequeue<T> {
        let stealer = self.inner_stealer.clone();
        let subscriber = match self.capacity {
            Capacity::Unbounded => Dequeue::unbounded(stealer),
            Capacity::Bounded(cap) => Dequeue::bounded(stealer, cap)
        };
        self.publishers.push(subscriber.sender());
        subscriber
    }
}

// -----------------------------------------------------------------------------
// 		- Reactive dequeue -
// ----------------------------------------------------------------------------- 
pub struct ReactiveDeque<T> {
    inner: EventedReactor<Dequeue<T>>,
}

impl<T> ReactiveDeque<T> { 
    pub fn new(deq: Dequeue<T>) -> Result<Self> {
        Ok(Self {
            inner: EventedReactor::new(deq, Ready::readable())?,
        })
    }

    pub fn steal(&self) -> Steal<T> {
        self.inner.inner().steal()
    }
}

impl<T> Reactive for ReactiveDeque<T> {
    type Output = T;
    type Input = ();

    fn reacting(&mut self, event: Event) -> bool {
        event.token() == self.inner.token()
    }

    fn react(&mut self) -> Reaction<Self::Output> {
        loop {
            match self.inner.inner().steal() {
                Steal::Success(val) => break Reaction::Value(val),
                Steal::Retry => continue,
                Steal::Empty => break Reaction::NoReaction,
            }
        }
    }
}

// -----------------------------------------------------------------------------
// 		- Dequeue -
// -----------------------------------------------------------------------------
pub struct Dequeue<T> {
    signal: SignalReceiver<()>,
    stealer: Stealer<T>,
}

impl<T> Dequeue<T> {
    pub fn bounded(stealer: Stealer<T>, capacity: usize) -> Self {
        let signal = SignalReceiver::bounded(capacity);

        Self { 
            signal, 
            stealer,
        }
    }

    pub fn unbounded(stealer: Stealer<T>) -> Self {
        let signal = SignalReceiver::unbounded();

        Self { 
            signal, 
            stealer,
        }
    }

    pub fn sender(&self) -> SignalSender<()> {
        self.signal.sender()
    }

    pub fn steal(&self) -> Steal<T> {
        self.signal.try_recv();
        self.stealer.steal()
    }
}

impl<T> Evented for Dequeue<T> {
    fn register(&self, poll: &Poll, token: Token, interest: Ready, opts: PollOpt) -> io::Result<()> {
        poll.register(
            &self.signal,
            token,
            interest,
            opts
        )
    }

    fn reregister(&self, poll: &Poll, token: Token, interest: Ready, opts: PollOpt) -> io::Result<()> {
        poll.reregister(
            &self.signal,
            token,
            interest,
            opts
        )
    }

    fn deregister(&self, poll: &Poll) -> io::Result<()> {
        poll.deregister(&self.signal)
    }
}
