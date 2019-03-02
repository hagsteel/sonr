//#[deny(missing_docs)]
pub mod reactor;

//#[deny(missing_docs)]
pub mod system;
pub mod net;
pub mod sync; 
pub mod errors;
mod prevec;

pub use prevec::PreVec;

// Re-exports
pub use mio::{Token, Event, Evented, PollOpt, Poll, Ready};

pub mod prelude {
    pub use mio::{Token, Event};
    pub use crate::reactor::{Reaction, Reactive};
    pub use crate::system::{SystemEvent, System};
}
