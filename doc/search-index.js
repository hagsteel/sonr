var N = null;var searchIndex = {};
searchIndex["sonr"]={"doc":"Simple Opinionated Networking in Rust","items":[[3,"Token","sonr","Associates readiness notifications with [`Evented`] handles.",N,N],[12,"0","","",0,N],[3,"Event","","An readiness event returned by [`Poll::poll`].",N,N],[8,"Evented","","A value that may be registered with `Poll`",N,N],[10,"register","","Register `self` with the given `Poll` instance.",1,[[["self"],["poll"],["token"],["ready"],["pollopt"]],["result",["error"]]]],[10,"reregister","","Re-register `self` with the given `Poll` instance.",1,[[["self"],["poll"],["token"],["ready"],["pollopt"]],["result",["error"]]]],[10,"deregister","","Deregister `self` from the given `Poll` instance",1,[[["self"],["poll"]],["result",["error"]]]],[3,"PollOpt","","Options supplied when registering an `Evented` handle with…",N,N],[3,"Poll","","Polls for readiness events on all registered values.",N,N],[3,"Ready","","A set of readiness event kinds",N,N],[3,"PreVec","","`PreVec`: a collection that allows inserts at a specific…",N,N],[0,"reactor","","",N,N],[3,"EventedReactor","sonr::reactor","The `EventedReactor` is driven by the `System`. TODO more…",N,N],[4,"Reaction","","",N,N],[13,"Continue","","",2,N],[13,"Event","","",2,N],[13,"Value","","",2,N],[0,"combinators","","",N,N],[3,"Chain","sonr::reactor::combinators","",N,N],[3,"And","","Use `and` to run more than one (evented) reactor in…",N,N],[3,"Map","","",N,N],[11,"new","","",3,[[["f"],["t"]],["self"]]],[11,"new","","",4,[[["t"],["u"]],["self"]]],[11,"new","","",5,[[["s"],["f"]],["self"]]],[0,"producers","sonr::reactor","",N,N],[3,"ReactiveGenerator","sonr::reactor::producers","The [`ReactiveGenerator`] reacts as soon as the [`System`]…",N,N],[3,"Mono","","A [`Mono`] reacts as soon as the [`System`] starts and…",N,N],[3,"ReactiveConsumer","","A [`ReactiveConsumer`] ``` # use…",N,N],[11,"new","","",6,[[["vec"]],["result"]]],[11,"new","","",7,[[["t"]],["result"]]],[11,"new","","",8,[[],["result"]]],[8,"Reactor","sonr::reactor","A reactor ...",N,N],[16,"Output","","The output passed to the next reactor in the chain.",9,N],[16,"Input","","Expected input type from the previous reactor in the chain.",9,N],[11,"react","","The generated output is passed as the input to the next…",9,[[["self"],["reaction"]],["reaction"]]],[11,"chain","","Chain two reactors together. The output of the first…",9,[[["self"],["t"]],["chain"]]],[11,"and","","Run two reactors independent of each other. ```no_run #…",9,[[["self"],["c"]],["and"]]],[11,"map","","Capture the output of a reactor in a closure. `no_run //…",9,[[["self"],["f"]],["map"]]],[11,"new","","Create a new instance of an `EventedReactor`.",10,[[["e"],["ready"]],["result"]]],[11,"inner","","Reference to the underlying evented type",10,[[["self"]],["e"]]],[11,"inner_mut","","Mutable reference to the underlying evented type",10,[[["self"]],["e"]]],[11,"token","","Return the `Token` used to register the inner type with…",10,[[["self"]],["token"]]],[11,"interest","","Return the interests of the reactor, usually readable…",10,[[["self"]],["ready"]]],[0,"system","sonr","",N,N],[3,"System","sonr::system","`System` is thread local and has to exist for each thread…",N,N],[4,"SystemEvent","","Specific event the [`System`] responds to NOTE: There…",N,N],[13,"Stop","","",11,N],[11,"init","","Initialise the system for the current thread. Should only…",12,[[],["result",["signalsender"]]]],[11,"register","","Register an `Evented` with the System.",12,N],[11,"reregister","","Reregister an evented reactor.",12,[[["eventedreactor"]],["result"]]],[11,"start","","Start the event loop. This will run until…",12,[[["r"]],["result"]]],[11,"free_token","","The token can be registered with another reactor. This is…",12,[[["token"]]]],[11,"reserve_token","","Reserve a token",12,[[],["result",["token"]]]],[11,"send","","Send a system event to the current system.",12,[[["systemevent"]]]],[0,"net","sonr","",N,N],[0,"tcp","sonr::net","",N,N],[3,"TcpStream","sonr::net::tcp","A non-blocking TCP stream between a local socket and a…",N,N],[3,"TcpListener","","A structure representing a socket server",N,N],[3,"ReactiveTcpListener","","",N,N],[6,"ReactiveTcpStream","","",N,N],[11,"new","","",13,[[["tcplistener"]],["result"]]],[11,"bind","","",13,[[["str"]],["result"]]],[11,"token","","",13,[[["self"]],["token"]]],[0,"stream","sonr::net","",N,N],[3,"Stream","sonr::net::stream","When a [`Stream`] `react`s the inner evented reactor is…",N,N],[8,"StreamRef","","",N,N],[16,"Evented","","",14,N],[10,"stream_ref","","",14,[[["self"]],["stream"]]],[10,"stream_mut","","",14,[[["self"]],["stream"]]],[11,"into_inner","","",15,[[["self"]],["eventedreactor"]]],[11,"new","","",15,[[["t"]],["result"]]],[11,"token","","The token used to track readiness of the underlying stream",15,[[["self"]],["token"]]],[11,"readable","","Is the underlying object readable?",15,[[["self"]],["bool"]]],[11,"writable","","Is the underlying object writable?",15,[[["self"]],["bool"]]],[11,"inner","","Reference the underlying object",15,[[["self"]],["t"]]],[11,"inner_mut","","Mutable reference to the underlying object",15,[[["self"]],["t"]]],[0,"uds","sonr::net","",N,N],[3,"UnixListener","sonr::net::uds","A structure representing a Unix domain socket server.",N,N],[3,"UnixStream","","A Unix stream socket.",N,N],[3,"ReactiveUdsListener","","",N,N],[6,"ReactiveUdsStream","","",N,N],[11,"bind","","",16,N],[11,"token","","",16,[[["self"]],["token"]]],[0,"sync","sonr","",N,N],[4,"Capacity","sonr::sync","Queue / Signal capacity",N,N],[13,"Unbounded","","Unlimited number of messages",17,N],[13,"Bounded","","Limited number of messages",17,N],[0,"queue","","",N,N],[3,"ReactiveQueue","sonr::sync::queue","",N,N],[3,"Queue","","",N,N],[3,"ReactiveDeque","","",N,N],[3,"Dequeue","","",N,N],[11,"unbounded","","",18,[[],["self"]]],[11,"bounded","","",18,[[["usize"]],["self"]]],[11,"push","","",18,[[["self"],["t"]]]],[11,"deque","","",18,[[["self"]],["dequeue"]]],[11,"unbounded","","",19,[[],["self"]]],[11,"bounded","","",19,[[["usize"]],["self"]]],[11,"push","","",19,[[["self"],["t"]]]],[11,"deque","","",19,[[["self"]],["dequeue"]]],[11,"new","","",20,[[["dequeue"]],["result"]]],[11,"bounded","","",21,[[["stealer"],["usize"]],["self"]]],[11,"unbounded","","",21,[[["stealer"]],["self"]]],[11,"sender","","",21,[[["self"]],["signalsender"]]],[11,"steal","","",21,[[["self"]],["steal"]]],[0,"signal","sonr::sync","",N,N],[3,"SignalSender","sonr::sync::signal","",N,N],[3,"SignalReceiver","","",N,N],[3,"ReactiveSignalReceiver","","React when new data is ready to be received",N,N],[11,"send","","",22,[[["self"],["t"]],["result",["trysenderror"]]]],[11,"unbounded","","",23,[[],["self"]]],[11,"bounded","","",23,[[["usize"]],["self"]]],[11,"try_recv","","",23,[[["self"]],["result"]]],[11,"sender","","",23,[[["self"]],["signalsender"]]],[11,"new","","",24,[[["signalreceiver"]],["result"]]],[11,"try_recv","","",24,[[["self"]],["result"]]],[11,"token","","",24,[[["self"]],["token"]]],[11,"sender","","",24,[[["self"]],["signalsender"]]],[0,"broadcast","sonr::sync","",N,N],[3,"Broadcast","sonr::sync::broadcast","",N,N],[3,"ReactiveBroadcast","","",N,N],[11,"unbounded","","",25,[[],["self"]]],[11,"bounded","","",25,[[["usize"]],["self"]]],[11,"subscriber","","",25,[[["self"]],["signalreceiver"]]],[11,"publish","","",25,[[["self"],["t"]]]],[0,"errors","sonr","SONR default `Error`",N,N],[4,"Error","sonr::errors","Wrapping error type.",N,N],[13,"Io","","std::io::Error",26,N],[13,"NoConnection","","No connection: A connection with a specific `Token` no…",26,N],[13,"ConnectionRemoved","","The connection was removed either by closing the socket or…",26,N],[13,"NoCapacity","","The `PreVec` does not have capacity for the new entry",26,N],[13,"AlreadyRegistered","","The session was already registered. A session can only be…",26,N],[13,"NoUdsConnection","","No unix domain socket waiting for a connection",26,N],[13,"TryRecvError","","Try receive error",26,N],[13,"RecvError","","Receive error",26,N],[13,"AddrParseError","","Address parse error",26,N],[13,"FromUtf8Error","","From UTF8 error",26,N],[6,"Result","","Result type: `std::result::Error<T, Error>`",N,N],[11,"with_capacity","sonr","Create a `PreVec` with a set capacity. Inserting above…",27,[[["usize"]],["self"]]],[11,"with_capacity_and_offset","","Create a `PreVec` with a set capacity and offset.",27,[[["usize"],["usize"]],["self"]]],[11,"capacity","","Return the capacity",27,[[["self"]],["usize"]]],[11,"offset","","Return the offset",27,[[["self"]],["usize"]]],[11,"prevent_growth","","Prevent inserting above the capacity.",27,[[["self"]]]],[11,"enable_growth","","Enable the collection to grow and allocate more space.",27,[[["self"]]]],[11,"in_range","","Check if the index is within the range of the collection…",27,[[["self"],["usize"]],["bool"]]],[11,"set_offset","","Set the offset of the collection.",27,[[["self"],["usize"]]]],[11,"get","","Get an entry at a specific index",27,[[["self"],["usize"]],["option"]]],[11,"get_mut","","Get a mutable entry at a specific index",27,[[["self"],["usize"]],["option"]]],[11,"insert","","Insert a value in the next available slot and return the…",27,[[["self"],["t"]],["result",["usize"]]]],[11,"remove","","Remove at index (inserting an empty entry)",27,[[["self"],["usize"]],["option"]]],[11,"len","","Number of occupied slots",27,[[["self"]],["usize"]]],[11,"is_empty","","Returns `true` if the collection has no entries",27,[[["self"]],["bool"]]],[11,"clear","","Remove all entries",27,[[["self"]]]],[11,"map","","",27,[[["self"],["f"]]]],[0,"prelude","","",N,N],[3,"Token","sonr::prelude","Associates readiness notifications with [`Evented`] handles.",N,N],[12,"0","","",0,N],[3,"Event","","An readiness event returned by [`Poll::poll`].",N,N],[11,"from","","",0,[[["t"]],["t"]]],[11,"into","","",0,[[["self"]],["u"]]],[11,"to_owned","","",0,[[["self"]],["t"]]],[11,"clone_into","","",0,N],[11,"try_from","","",0,[[["u"]],["result"]]],[11,"borrow","","",0,[[["self"]],["t"]]],[11,"borrow_mut","","",0,[[["self"]],["t"]]],[11,"try_into","","",0,[[["self"]],["result"]]],[11,"get_type_id","","",0,[[["self"]],["typeid"]]],[11,"from","","",28,[[["t"]],["t"]]],[11,"into","","",28,[[["self"]],["u"]]],[11,"to_owned","","",28,[[["self"]],["t"]]],[11,"clone_into","","",28,N],[11,"try_from","","",28,[[["u"]],["result"]]],[11,"borrow","","",28,[[["self"]],["t"]]],[11,"borrow_mut","","",28,[[["self"]],["t"]]],[11,"try_into","","",28,[[["self"]],["result"]]],[11,"get_type_id","","",28,[[["self"]],["typeid"]]],[11,"from","sonr","",29,[[["t"]],["t"]]],[11,"into","","",29,[[["self"]],["u"]]],[11,"to_owned","","",29,[[["self"]],["t"]]],[11,"clone_into","","",29,N],[11,"try_from","","",29,[[["u"]],["result"]]],[11,"borrow","","",29,[[["self"]],["t"]]],[11,"borrow_mut","","",29,[[["self"]],["t"]]],[11,"try_into","","",29,[[["self"]],["result"]]],[11,"get_type_id","","",29,[[["self"]],["typeid"]]],[11,"from","","",30,[[["t"]],["t"]]],[11,"into","","",30,[[["self"]],["u"]]],[11,"try_from","","",30,[[["u"]],["result"]]],[11,"borrow","","",30,[[["self"]],["t"]]],[11,"borrow_mut","","",30,[[["self"]],["t"]]],[11,"try_into","","",30,[[["self"]],["result"]]],[11,"get_type_id","","",30,[[["self"]],["typeid"]]],[11,"from","","",31,[[["t"]],["t"]]],[11,"into","","",31,[[["self"]],["u"]]],[11,"to_owned","","",31,[[["self"]],["t"]]],[11,"clone_into","","",31,N],[11,"try_from","","",31,[[["u"]],["result"]]],[11,"borrow","","",31,[[["self"]],["t"]]],[11,"borrow_mut","","",31,[[["self"]],["t"]]],[11,"try_into","","",31,[[["self"]],["result"]]],[11,"get_type_id","","",31,[[["self"]],["typeid"]]],[11,"from","","",27,[[["t"]],["t"]]],[11,"into","","",27,[[["self"]],["u"]]],[11,"try_from","","",27,[[["u"]],["result"]]],[11,"borrow","","",27,[[["self"]],["t"]]],[11,"borrow_mut","","",27,[[["self"]],["t"]]],[11,"try_into","","",27,[[["self"]],["result"]]],[11,"get_type_id","","",27,[[["self"]],["typeid"]]],[11,"from","sonr::reactor","",10,[[["t"]],["t"]]],[11,"into","","",10,[[["self"]],["u"]]],[11,"try_from","","",10,[[["u"]],["result"]]],[11,"borrow","","",10,[[["self"]],["t"]]],[11,"borrow_mut","","",10,[[["self"]],["t"]]],[11,"try_into","","",10,[[["self"]],["result"]]],[11,"get_type_id","","",10,[[["self"]],["typeid"]]],[11,"from","","",2,[[["t"]],["t"]]],[11,"into","","",2,[[["self"]],["u"]]],[11,"try_from","","",2,[[["u"]],["result"]]],[11,"borrow","","",2,[[["self"]],["t"]]],[11,"borrow_mut","","",2,[[["self"]],["t"]]],[11,"try_into","","",2,[[["self"]],["result"]]],[11,"get_type_id","","",2,[[["self"]],["typeid"]]],[11,"from","sonr::reactor::combinators","",3,[[["t"]],["t"]]],[11,"into","","",3,[[["self"]],["u"]]],[11,"try_from","","",3,[[["u"]],["result"]]],[11,"borrow","","",3,[[["self"]],["t"]]],[11,"borrow_mut","","",3,[[["self"]],["t"]]],[11,"try_into","","",3,[[["self"]],["result"]]],[11,"get_type_id","","",3,[[["self"]],["typeid"]]],[11,"from","","",4,[[["t"]],["t"]]],[11,"into","","",4,[[["self"]],["u"]]],[11,"try_from","","",4,[[["u"]],["result"]]],[11,"borrow","","",4,[[["self"]],["t"]]],[11,"borrow_mut","","",4,[[["self"]],["t"]]],[11,"try_into","","",4,[[["self"]],["result"]]],[11,"get_type_id","","",4,[[["self"]],["typeid"]]],[11,"from","","",5,[[["t"]],["t"]]],[11,"into","","",5,[[["self"]],["u"]]],[11,"try_from","","",5,[[["u"]],["result"]]],[11,"borrow","","",5,[[["self"]],["t"]]],[11,"borrow_mut","","",5,[[["self"]],["t"]]],[11,"try_into","","",5,[[["self"]],["result"]]],[11,"get_type_id","","",5,[[["self"]],["typeid"]]],[11,"from","sonr::reactor::producers","",6,[[["t"]],["t"]]],[11,"into","","",6,[[["self"]],["u"]]],[11,"try_from","","",6,[[["u"]],["result"]]],[11,"borrow","","",6,[[["self"]],["t"]]],[11,"borrow_mut","","",6,[[["self"]],["t"]]],[11,"try_into","","",6,[[["self"]],["result"]]],[11,"get_type_id","","",6,[[["self"]],["typeid"]]],[11,"from","","",7,[[["t"]],["t"]]],[11,"into","","",7,[[["self"]],["u"]]],[11,"try_from","","",7,[[["u"]],["result"]]],[11,"borrow","","",7,[[["self"]],["t"]]],[11,"borrow_mut","","",7,[[["self"]],["t"]]],[11,"try_into","","",7,[[["self"]],["result"]]],[11,"get_type_id","","",7,[[["self"]],["typeid"]]],[11,"from","","",8,[[["t"]],["t"]]],[11,"into","","",8,[[["self"]],["u"]]],[11,"try_from","","",8,[[["u"]],["result"]]],[11,"borrow","","",8,[[["self"]],["t"]]],[11,"borrow_mut","","",8,[[["self"]],["t"]]],[11,"try_into","","",8,[[["self"]],["result"]]],[11,"get_type_id","","",8,[[["self"]],["typeid"]]],[11,"from","sonr::system","",12,[[["t"]],["t"]]],[11,"into","","",12,[[["self"]],["u"]]],[11,"try_from","","",12,[[["u"]],["result"]]],[11,"borrow","","",12,[[["self"]],["t"]]],[11,"borrow_mut","","",12,[[["self"]],["t"]]],[11,"try_into","","",12,[[["self"]],["result"]]],[11,"get_type_id","","",12,[[["self"]],["typeid"]]],[11,"from","","",11,[[["t"]],["t"]]],[11,"into","","",11,[[["self"]],["u"]]],[11,"try_from","","",11,[[["u"]],["result"]]],[11,"borrow","","",11,[[["self"]],["t"]]],[11,"borrow_mut","","",11,[[["self"]],["t"]]],[11,"try_into","","",11,[[["self"]],["result"]]],[11,"get_type_id","","",11,[[["self"]],["typeid"]]],[11,"from","sonr::net::tcp","",32,[[["t"]],["t"]]],[11,"into","","",32,[[["self"]],["u"]]],[11,"try_from","","",32,[[["u"]],["result"]]],[11,"borrow","","",32,[[["self"]],["t"]]],[11,"borrow_mut","","",32,[[["self"]],["t"]]],[11,"try_into","","",32,[[["self"]],["result"]]],[11,"get_type_id","","",32,[[["self"]],["typeid"]]],[11,"from","","",33,[[["t"]],["t"]]],[11,"into","","",33,[[["self"]],["u"]]],[11,"try_from","","",33,[[["u"]],["result"]]],[11,"borrow","","",33,[[["self"]],["t"]]],[11,"borrow_mut","","",33,[[["self"]],["t"]]],[11,"try_into","","",33,[[["self"]],["result"]]],[11,"get_type_id","","",33,[[["self"]],["typeid"]]],[11,"from","","",13,[[["t"]],["t"]]],[11,"into","","",13,[[["self"]],["u"]]],[11,"try_from","","",13,[[["u"]],["result"]]],[11,"borrow","","",13,[[["self"]],["t"]]],[11,"borrow_mut","","",13,[[["self"]],["t"]]],[11,"try_into","","",13,[[["self"]],["result"]]],[11,"get_type_id","","",13,[[["self"]],["typeid"]]],[11,"from","sonr::net::stream","",15,[[["t"]],["t"]]],[11,"into","","",15,[[["self"]],["u"]]],[11,"try_from","","",15,[[["u"]],["result"]]],[11,"borrow","","",15,[[["self"]],["t"]]],[11,"borrow_mut","","",15,[[["self"]],["t"]]],[11,"try_into","","",15,[[["self"]],["result"]]],[11,"get_type_id","","",15,[[["self"]],["typeid"]]],[11,"from","sonr::net::uds","",34,[[["t"]],["t"]]],[11,"into","","",34,[[["self"]],["u"]]],[11,"try_from","","",34,[[["u"]],["result"]]],[11,"borrow","","",34,[[["self"]],["t"]]],[11,"borrow_mut","","",34,[[["self"]],["t"]]],[11,"try_into","","",34,[[["self"]],["result"]]],[11,"get_type_id","","",34,[[["self"]],["typeid"]]],[11,"from","","",35,[[["t"]],["t"]]],[11,"into","","",35,[[["self"]],["u"]]],[11,"try_from","","",35,[[["u"]],["result"]]],[11,"borrow","","",35,[[["self"]],["t"]]],[11,"borrow_mut","","",35,[[["self"]],["t"]]],[11,"try_into","","",35,[[["self"]],["result"]]],[11,"get_type_id","","",35,[[["self"]],["typeid"]]],[11,"from","","",16,[[["t"]],["t"]]],[11,"into","","",16,[[["self"]],["u"]]],[11,"try_from","","",16,[[["u"]],["result"]]],[11,"borrow","","",16,[[["self"]],["t"]]],[11,"borrow_mut","","",16,[[["self"]],["t"]]],[11,"try_into","","",16,[[["self"]],["result"]]],[11,"get_type_id","","",16,[[["self"]],["typeid"]]],[11,"from","sonr::sync","",17,[[["t"]],["t"]]],[11,"into","","",17,[[["self"]],["u"]]],[11,"to_owned","","",17,[[["self"]],["t"]]],[11,"clone_into","","",17,N],[11,"try_from","","",17,[[["u"]],["result"]]],[11,"borrow","","",17,[[["self"]],["t"]]],[11,"borrow_mut","","",17,[[["self"]],["t"]]],[11,"try_into","","",17,[[["self"]],["result"]]],[11,"get_type_id","","",17,[[["self"]],["typeid"]]],[11,"from","sonr::sync::queue","",18,[[["t"]],["t"]]],[11,"into","","",18,[[["self"]],["u"]]],[11,"try_from","","",18,[[["u"]],["result"]]],[11,"borrow","","",18,[[["self"]],["t"]]],[11,"borrow_mut","","",18,[[["self"]],["t"]]],[11,"try_into","","",18,[[["self"]],["result"]]],[11,"get_type_id","","",18,[[["self"]],["typeid"]]],[11,"from","","",19,[[["t"]],["t"]]],[11,"into","","",19,[[["self"]],["u"]]],[11,"try_from","","",19,[[["u"]],["result"]]],[11,"borrow","","",19,[[["self"]],["t"]]],[11,"borrow_mut","","",19,[[["self"]],["t"]]],[11,"try_into","","",19,[[["self"]],["result"]]],[11,"get_type_id","","",19,[[["self"]],["typeid"]]],[11,"from","","",20,[[["t"]],["t"]]],[11,"into","","",20,[[["self"]],["u"]]],[11,"try_from","","",20,[[["u"]],["result"]]],[11,"borrow","","",20,[[["self"]],["t"]]],[11,"borrow_mut","","",20,[[["self"]],["t"]]],[11,"try_into","","",20,[[["self"]],["result"]]],[11,"get_type_id","","",20,[[["self"]],["typeid"]]],[11,"from","","",21,[[["t"]],["t"]]],[11,"into","","",21,[[["self"]],["u"]]],[11,"try_from","","",21,[[["u"]],["result"]]],[11,"borrow","","",21,[[["self"]],["t"]]],[11,"borrow_mut","","",21,[[["self"]],["t"]]],[11,"try_into","","",21,[[["self"]],["result"]]],[11,"get_type_id","","",21,[[["self"]],["typeid"]]],[11,"from","sonr::sync::signal","",22,[[["t"]],["t"]]],[11,"into","","",22,[[["self"]],["u"]]],[11,"to_owned","","",22,[[["self"]],["t"]]],[11,"clone_into","","",22,N],[11,"try_from","","",22,[[["u"]],["result"]]],[11,"borrow","","",22,[[["self"]],["t"]]],[11,"borrow_mut","","",22,[[["self"]],["t"]]],[11,"try_into","","",22,[[["self"]],["result"]]],[11,"get_type_id","","",22,[[["self"]],["typeid"]]],[11,"from","","",23,[[["t"]],["t"]]],[11,"into","","",23,[[["self"]],["u"]]],[11,"try_from","","",23,[[["u"]],["result"]]],[11,"borrow","","",23,[[["self"]],["t"]]],[11,"borrow_mut","","",23,[[["self"]],["t"]]],[11,"try_into","","",23,[[["self"]],["result"]]],[11,"get_type_id","","",23,[[["self"]],["typeid"]]],[11,"from","","",24,[[["t"]],["t"]]],[11,"into","","",24,[[["self"]],["u"]]],[11,"try_from","","",24,[[["u"]],["result"]]],[11,"borrow","","",24,[[["self"]],["t"]]],[11,"borrow_mut","","",24,[[["self"]],["t"]]],[11,"try_into","","",24,[[["self"]],["result"]]],[11,"get_type_id","","",24,[[["self"]],["typeid"]]],[11,"from","sonr::sync::broadcast","",25,[[["t"]],["t"]]],[11,"into","","",25,[[["self"]],["u"]]],[11,"to_owned","","",25,[[["self"]],["t"]]],[11,"clone_into","","",25,N],[11,"try_from","","",25,[[["u"]],["result"]]],[11,"borrow","","",25,[[["self"]],["t"]]],[11,"borrow_mut","","",25,[[["self"]],["t"]]],[11,"try_into","","",25,[[["self"]],["result"]]],[11,"get_type_id","","",25,[[["self"]],["typeid"]]],[11,"from","","",36,[[["t"]],["t"]]],[11,"into","","",36,[[["self"]],["u"]]],[11,"try_from","","",36,[[["u"]],["result"]]],[11,"borrow","","",36,[[["self"]],["t"]]],[11,"borrow_mut","","",36,[[["self"]],["t"]]],[11,"try_into","","",36,[[["self"]],["result"]]],[11,"get_type_id","","",36,[[["self"]],["typeid"]]],[11,"from","sonr::errors","",26,[[["t"]],["t"]]],[11,"into","","",26,[[["self"]],["u"]]],[11,"try_from","","",26,[[["u"]],["result"]]],[11,"borrow","","",26,[[["self"]],["t"]]],[11,"borrow_mut","","",26,[[["self"]],["t"]]],[11,"try_into","","",26,[[["self"]],["result"]]],[11,"get_type_id","","",26,[[["self"]],["typeid"]]],[11,"sub","sonr","",31,[[["self"],["t"]],["ready"]]],[11,"sub","","",29,[[["self"],["pollopt"]],["pollopt"]]],[11,"hash","sonr::prelude","",0,N],[11,"bitxor","sonr","",31,[[["self"],["t"]],["ready"]]],[11,"bitxor","","",29,[[["self"],["pollopt"]],["pollopt"]]],[11,"from","sonr::prelude","",0,[[["usize"]],["token"]]],[11,"from","sonr","",31,[[["unixready"]],["ready"]]],[11,"register","sonr::net::tcp","",32,[[["self"],["poll"],["token"],["ready"],["pollopt"]],["result",["error"]]]],[11,"reregister","","",32,[[["self"],["poll"],["token"],["ready"],["pollopt"]],["result",["error"]]]],[11,"deregister","","",32,[[["self"],["poll"]],["result",["error"]]]],[11,"register","","",33,[[["self"],["poll"],["token"],["ready"],["pollopt"]],["result",["error"]]]],[11,"reregister","","",33,[[["self"],["poll"],["token"],["ready"],["pollopt"]],["result",["error"]]]],[11,"deregister","","",33,[[["self"],["poll"]],["result",["error"]]]],[11,"eq","sonr","",31,[[["self"],["ready"]],["bool"]]],[11,"ne","","",31,[[["self"],["ready"]],["bool"]]],[11,"eq","sonr::prelude","",28,[[["self"],["event"]],["bool"]]],[11,"ne","","",28,[[["self"],["event"]],["bool"]]],[11,"eq","sonr","",29,[[["self"],["pollopt"]],["bool"]]],[11,"ne","","",29,[[["self"],["pollopt"]],["bool"]]],[11,"eq","sonr::prelude","",0,[[["self"],["token"]],["bool"]]],[11,"ne","","",0,[[["self"],["token"]],["bool"]]],[11,"from_raw_fd","sonr::net::tcp","",33,[[["i32"]],["tcplistener"]]],[11,"from_raw_fd","","",32,[[["i32"]],["tcpstream"]]],[11,"bitor_assign","sonr","",31,N],[11,"bitand","","",29,[[["self"],["pollopt"]],["pollopt"]]],[11,"bitand","","",31,[[["self"],["t"]],["ready"]]],[11,"cmp","","",29,[[["self"],["pollopt"]],["ordering"]]],[11,"cmp","","",31,[[["self"],["ready"]],["ordering"]]],[11,"cmp","sonr::prelude","",0,[[["self"],["token"]],["ordering"]]],[11,"partial_cmp","sonr","",29,[[["self"],["pollopt"]],["option",["ordering"]]]],[11,"lt","","",29,[[["self"],["pollopt"]],["bool"]]],[11,"le","","",29,[[["self"],["pollopt"]],["bool"]]],[11,"gt","","",29,[[["self"],["pollopt"]],["bool"]]],[11,"ge","","",29,[[["self"],["pollopt"]],["bool"]]],[11,"partial_cmp","","",31,[[["self"],["ready"]],["option",["ordering"]]]],[11,"lt","","",31,[[["self"],["ready"]],["bool"]]],[11,"le","","",31,[[["self"],["ready"]],["bool"]]],[11,"gt","","",31,[[["self"],["ready"]],["bool"]]],[11,"ge","","",31,[[["self"],["ready"]],["bool"]]],[11,"partial_cmp","sonr::prelude","",0,[[["self"],["token"]],["option",["ordering"]]]],[11,"lt","","",0,[[["self"],["token"]],["bool"]]],[11,"le","","",0,[[["self"],["token"]],["bool"]]],[11,"gt","","",0,[[["self"],["token"]],["bool"]]],[11,"ge","","",0,[[["self"],["token"]],["bool"]]],[11,"bitor","sonr","",29,[[["self"],["pollopt"]],["pollopt"]]],[11,"bitor","","",31,[[["self"],["t"]],["ready"]]],[11,"read","sonr::net::tcp","",32,N],[11,"into_raw_fd","","",32,[[["self"]],["i32"]]],[11,"into_raw_fd","","",33,[[["self"]],["i32"]]],[11,"as_raw_fd","","",33,[[["self"]],["i32"]]],[11,"as_raw_fd","sonr","",30,[[["self"]],["i32"]]],[11,"as_raw_fd","sonr::net::tcp","",32,[[["self"]],["i32"]]],[11,"write","","",32,N],[11,"flush","","",32,[[["self"]],["result",["error"]]]],[11,"bitxor_assign","sonr","",31,N],[11,"clone","","",31,[[["self"]],["ready"]]],[11,"clone","","",29,[[["self"]],["pollopt"]]],[11,"clone","sonr::prelude","",28,[[["self"]],["event"]]],[11,"clone","","",0,[[["self"]],["token"]]],[11,"sub_assign","sonr","",31,N],[11,"bitand_assign","","",31,N],[11,"fmt","sonr::net::tcp","",33,[[["self"],["formatter"]],["result",["error"]]]],[11,"fmt","","",32,[[["self"],["formatter"]],["result",["error"]]]],[11,"fmt","sonr","",30,[[["self"],["formatter"]],["result",["error"]]]],[11,"fmt","sonr::prelude","",28,[[["self"],["formatter"]],["result",["error"]]]],[11,"fmt","","",0,[[["self"],["formatter"]],["result",["error"]]]],[11,"fmt","sonr","",29,[[["self"],["formatter"]],["result",["error"]]]],[11,"fmt","","",31,[[["self"],["formatter"]],["result",["error"]]]],[11,"read","sonr::net::uds","",35,N],[11,"into_raw_fd","","",35,[[["self"]],["i32"]]],[11,"into_raw_fd","","",34,[[["self"]],["i32"]]],[11,"as_raw_fd","","",34,[[["self"]],["i32"]]],[11,"as_raw_fd","","",35,[[["self"]],["i32"]]],[11,"write","","",35,N],[11,"flush","","",35,[[["self"]],["result",["error"]]]],[11,"from_raw_fd","","",35,[[["i32"]],["unixstream"]]],[11,"from_raw_fd","","",34,[[["i32"]],["unixlistener"]]],[11,"fmt","","",35,[[["self"],["formatter"]],["result",["error"]]]],[11,"fmt","","",34,[[["self"],["formatter"]],["result",["error"]]]],[11,"register","","",34,[[["self"],["poll"],["token"],["ready"],["pollopt"]],["result",["error"]]]],[11,"reregister","","",34,[[["self"],["poll"],["token"],["ready"],["pollopt"]],["result",["error"]]]],[11,"deregister","","",34,[[["self"],["poll"]],["result",["error"]]]],[11,"register","","",35,[[["self"],["poll"],["token"],["ready"],["pollopt"]],["result",["error"]]]],[11,"reregister","","",35,[[["self"],["poll"],["token"],["ready"],["pollopt"]],["result",["error"]]]],[11,"deregister","","",35,[[["self"],["poll"]],["result",["error"]]]],[11,"react","sonr::reactor::combinators","",3,[[["self"],["reaction"]],["reaction"]]],[11,"react","","",4,[[["self"],["reaction"]],["reaction"]]],[11,"react","","",5,[[["self"],["reaction"]],["reaction"]]],[11,"react","sonr::reactor::producers","",6,[[["self"],["reaction"]],["reaction"]]],[11,"react","","",7,[[["self"],["reaction"]],["reaction"]]],[11,"react","","",8,[[["self"],["reaction"]],["reaction"]]],[11,"react","sonr::net::tcp","",13,[[["self"],["reaction"]],["reaction"]]],[11,"react","sonr::net::stream","",15,[[["self"],["reaction"]],["reaction"]]],[11,"react","sonr::net::uds","",16,[[["self"],["reaction"]],["reaction"]]],[11,"react","sonr::sync::queue","",18,[[["self"],["reaction"]],["reaction"]]],[11,"react","","",20,[[["self"],["reaction"]],["reaction"]]],[11,"react","sonr::sync::signal","",24,[[["self"],["reaction"]],["reaction"]]],[11,"react","sonr::sync::broadcast","",36,[[["self"],["reaction"]],["reaction"]]],[11,"stream_ref","sonr","",37,[[["self"]],["self"]]],[11,"stream_mut","","",37,[[["self"]],["self"]]],[11,"stream_ref","","",38,[[["self"]],["self"]]],[11,"stream_mut","","",38,[[["self"]],["self"]]],[11,"as_ref","sonr::net::stream","",15,[[["self"]],["stream"]]],[11,"clone","sonr::sync::signal","",22,[[["self"]],["self"]]],[11,"clone","sonr::sync::broadcast","",25,[[["self"]],["self"]]],[11,"clone","sonr::sync","",17,[[["self"]],["capacity"]]],[11,"from","sonr::reactor","",2,[[["event"]],["reaction"]]],[11,"from","sonr::net::stream","",15,[[["eventedreactor"]],["self"]]],[11,"from","sonr::sync::signal","",23,[[["capacity"]],["self"]]],[11,"from","","",23,[[["capacity"]],["self"]]],[11,"from","sonr::sync::broadcast","",25,[[["capacity"]],["self"]]],[11,"from","sonr::errors","",26,[[["error"]],["error"]]],[11,"from","","",26,[[["recverror"]],["error"]]],[11,"from","","",26,[[["tryrecverror"]],["error"]]],[11,"from","","",26,[[["addrparseerror"]],["error"]]],[11,"from","","",26,[[["fromutf8error"]],["error"]]],[11,"drop","sonr::reactor","",10,[[["self"]]]],[11,"fmt","","",2,[[["self"],["formatter"]],["result"]]],[11,"fmt","","",10,[[["self"],["formatter"]],["result"]]],[11,"fmt","sonr::system","",11,[[["self"],["formatter"]],["result"]]],[11,"fmt","sonr::net::stream","",15,[[["self"],["formatter"]],["result"]]],[11,"fmt","sonr::sync::signal","",22,[[["self"],["formatter"]],["result"]]],[11,"fmt","sonr::errors","",26,[[["self"],["formatter"]],["result"]]],[11,"index","sonr","",27,[[["self"],["usize"]],["t"]]],[11,"index_mut","","",27,[[["self"],["usize"]],["t"]]],[11,"read","sonr::reactor","",10,N],[11,"read","sonr::net::stream","",15,N],[11,"write","sonr::reactor","",10,N],[11,"flush","","",10,[[["self"]],["result"]]],[11,"write","sonr::net::stream","",15,N],[11,"flush","","",15,[[["self"]],["result"]]],[11,"register","sonr::sync::queue","",21,[[["self"],["poll"],["token"],["ready"],["pollopt"]],["result"]]],[11,"reregister","","",21,[[["self"],["poll"],["token"],["ready"],["pollopt"]],["result"]]],[11,"deregister","","",21,[[["self"],["poll"]],["result"]]],[11,"register","sonr::sync::signal","",23,[[["self"],["poll"],["token"],["ready"],["pollopt"]],["result"]]],[11,"reregister","","",23,[[["self"],["poll"],["token"],["ready"],["pollopt"]],["result"]]],[11,"deregister","","",23,[[["self"],["poll"]],["result"]]],[11,"new","sonr::prelude","Creates a new `Event` containing `readiness` and `token`",28,[[["ready"],["token"]],["event"]]],[11,"readiness","","Returns the event's readiness.",28,[[["self"]],["ready"]]],[11,"token","","Returns the event's token.",28,[[["self"]],["token"]]],[11,"empty","sonr","Return a `PollOpt` representing no set options.",29,[[],["pollopt"]]],[11,"edge","","Return a `PollOpt` representing edge-triggered…",29,[[],["pollopt"]]],[11,"level","","Return a `PollOpt` representing level-triggered…",29,[[],["pollopt"]]],[11,"oneshot","","Return a `PollOpt` representing oneshot notifications.",29,[[],["pollopt"]]],[11,"is_edge","","Returns true if the options include edge-triggered…",29,[[["self"]],["bool"]]],[11,"is_level","","Returns true if the options include level-triggered…",29,[[["self"]],["bool"]]],[11,"is_oneshot","","Returns true if the options includes oneshot.",29,[[["self"]],["bool"]]],[11,"contains","","Returns true if `self` is a superset of `other`.",29,[[["self"],["pollopt"]],["bool"]]],[11,"insert","","Adds all options represented by `other` into `self`.",29,N],[11,"remove","","Removes all options represented by `other` from `self`.",29,N],[11,"new","","Return a new `Poll` handle.",30,[[],["result",["poll","error"]]]],[11,"register","","Register an `Evented` handle with the `Poll` instance.",30,[[["self"],["e"],["token"],["ready"],["pollopt"]],["result",["error"]]]],[11,"reregister","","Re-register an `Evented` handle with the `Poll` instance.",30,[[["self"],["e"],["token"],["ready"],["pollopt"]],["result",["error"]]]],[11,"deregister","","Deregister an `Evented` handle with the `Poll` instance.",30,[[["self"],["e"]],["result",["error"]]]],[11,"poll","","Wait for readiness events",30,[[["self"],["events"],["option",["duration"]]],["result",["usize","error"]]]],[11,"poll_interruptible","","Like `poll`, but may be interrupted by a signal",30,[[["self"],["events"],["option",["duration"]]],["result",["usize","error"]]]],[11,"empty","","Returns the empty `Ready` set.",31,[[],["ready"]]],[11,"readable","","Returns a `Ready` representing readable readiness.",31,[[],["ready"]]],[11,"writable","","Returns a `Ready` representing writable readiness.",31,[[],["ready"]]],[11,"all","","Returns a `Ready` representing readiness for all operations.",31,[[],["ready"]]],[11,"is_empty","","Returns true if `Ready` is the empty set",31,[[["self"]],["bool"]]],[11,"is_readable","","Returns true if the value includes readable readiness",31,[[["self"]],["bool"]]],[11,"is_writable","","Returns true if the value includes writable readiness",31,[[["self"]],["bool"]]],[11,"insert","","Adds all readiness represented by `other` into `self`.",31,N],[11,"remove","","Removes all options represented by `other` from `self`.",31,N],[11,"contains","","Returns true if `self` is a superset of `other`.",31,[[["self"],["t"]],["bool"]]],[11,"from_usize","","Create a `Ready` instance using the given `usize`…",31,[[["usize"]],["ready"]]],[11,"as_usize","","Returns a `usize` representation of the `Ready` value.",31,[[["self"]],["usize"]]],[11,"connect","sonr::net::tcp","Create a new TCP stream and issue a non-blocking connect…",32,[[["socketaddr"]],["result",["tcpstream","error"]]]],[11,"connect_stream","","Creates a new `TcpStream` from the pending socket inside…",32,[[["tcpstream"],["socketaddr"]],["result",["tcpstream","error"]]]],[11,"from_stream","","Creates a new `TcpStream` from a standard `net::TcpStream`.",32,[[["tcpstream"]],["result",["tcpstream","error"]]]],[11,"peer_addr","","Returns the socket address of the remote peer of this TCP…",32,[[["self"]],["result",["socketaddr","error"]]]],[11,"local_addr","","Returns the socket address of the local half of this TCP…",32,[[["self"]],["result",["socketaddr","error"]]]],[11,"try_clone","","Creates a new independently owned handle to the underlying…",32,[[["self"]],["result",["tcpstream","error"]]]],[11,"shutdown","","Shuts down the read, write, or both halves of this…",32,[[["self"],["shutdown"]],["result",["error"]]]],[11,"set_nodelay","","Sets the value of the `TCP_NODELAY` option on this socket.",32,[[["self"],["bool"]],["result",["error"]]]],[11,"nodelay","","Gets the value of the `TCP_NODELAY` option on this socket.",32,[[["self"]],["result",["bool","error"]]]],[11,"set_recv_buffer_size","","Sets the value of the `SO_RCVBUF` option on this socket.",32,[[["self"],["usize"]],["result",["error"]]]],[11,"recv_buffer_size","","Gets the value of the `SO_RCVBUF` option on this socket.",32,[[["self"]],["result",["usize","error"]]]],[11,"set_send_buffer_size","","Sets the value of the `SO_SNDBUF` option on this socket.",32,[[["self"],["usize"]],["result",["error"]]]],[11,"send_buffer_size","","Gets the value of the `SO_SNDBUF` option on this socket.",32,[[["self"]],["result",["usize","error"]]]],[11,"set_keepalive","","Sets whether keepalive messages are enabled to be sent on…",32,[[["self"],["option",["duration"]]],["result",["error"]]]],[11,"keepalive","","Returns whether keepalive messages are enabled on this…",32,[[["self"]],["result",["option","error"]]]],[11,"set_ttl","","Sets the value for the `IP_TTL` option on this socket.",32,[[["self"],["u32"]],["result",["error"]]]],[11,"ttl","","Gets the value of the `IP_TTL` option for this socket.",32,[[["self"]],["result",["u32","error"]]]],[11,"set_only_v6","","Sets the value for the `IPV6_V6ONLY` option on this socket.",32,[[["self"],["bool"]],["result",["error"]]]],[11,"only_v6","","Gets the value of the `IPV6_V6ONLY` option for this socket.",32,[[["self"]],["result",["bool","error"]]]],[11,"set_linger","","Sets the value for the `SO_LINGER` option on this socket.",32,[[["self"],["option",["duration"]]],["result",["error"]]]],[11,"linger","","Gets the value of the `SO_LINGER` option on this socket.",32,[[["self"]],["result",["option","error"]]]],[11,"take_error","","Get the value of the `SO_ERROR` option on this socket.",32,[[["self"]],["result",["option","error"]]]],[11,"peek","","Receives data on the socket from the remote address to…",32,N],[11,"read_bufs","","Read in a list of buffers all at once.",32,N],[11,"write_bufs","","Write a list of buffers all at once.",32,N],[11,"bind","","Convenience method to bind a new TCP listener to the…",33,[[["socketaddr"]],["result",["tcplistener","error"]]]],[11,"from_std","","Creates a new `TcpListener` from an instance of a…",33,[[["tcplistener"]],["result",["tcplistener","error"]]]],[11,"accept","","Accepts a new `TcpStream`.",33,[[["self"]],["result",["error"]]]],[11,"accept_std","","Accepts a new `std::net::TcpStream`.",33,[[["self"]],["result",["error"]]]],[11,"local_addr","","Returns the local socket address of this listener.",33,[[["self"]],["result",["socketaddr","error"]]]],[11,"try_clone","","Creates a new independently owned handle to the underlying…",33,[[["self"]],["result",["tcplistener","error"]]]],[11,"set_ttl","","Sets the value for the `IP_TTL` option on this socket.",33,[[["self"],["u32"]],["result",["error"]]]],[11,"ttl","","Gets the value of the `IP_TTL` option for this socket.",33,[[["self"]],["result",["u32","error"]]]],[11,"set_only_v6","","Sets the value for the `IPV6_V6ONLY` option on this socket.",33,[[["self"],["bool"]],["result",["error"]]]],[11,"only_v6","","Gets the value of the `IPV6_V6ONLY` option for this socket.",33,[[["self"]],["result",["bool","error"]]]],[11,"take_error","","Get the value of the `SO_ERROR` option on this socket.",33,[[["self"]],["result",["option","error"]]]],[11,"bind","sonr::net::uds","Creates a new `UnixListener` bound to the specified socket.",34,[[["p"]],["result",["unixlistener","error"]]]],[11,"from_listener","","Consumes a standard library `UnixListener` and returns a…",34,[[["unixlistener"]],["result",["unixlistener","error"]]]],[11,"accept","","Accepts a new incoming connection to this listener.",34,[[["self"]],["result",["option","error"]]]],[11,"accept_std","","Accepts a new incoming connection to this listener.",34,[[["self"]],["result",["option","error"]]]],[11,"try_clone","","Creates a new independently owned handle to the underlying…",34,[[["self"]],["result",["unixlistener","error"]]]],[11,"local_addr","","Returns the local socket address of this listener.",34,[[["self"]],["result",["socketaddr","error"]]]],[11,"take_error","","Returns the value of the `SO_ERROR` option.",34,[[["self"]],["result",["option","error"]]]],[11,"connect","","Connects to the socket named by `path`.",35,[[["p"]],["result",["unixstream","error"]]]],[11,"from_stream","","Consumes a standard library `UnixStream` and returns a…",35,[[["unixstream"]],["result",["unixstream","error"]]]],[11,"pair","","Creates an unnamed pair of connected sockets.",35,[[],["result",["error"]]]],[11,"try_clone","","Creates a new independently owned handle to the underlying…",35,[[["self"]],["result",["unixstream","error"]]]],[11,"local_addr","","Returns the socket address of the local half of this…",35,[[["self"]],["result",["socketaddr","error"]]]],[11,"peer_addr","","Returns the socket address of the remote half of this…",35,[[["self"]],["result",["socketaddr","error"]]]],[11,"take_error","","Returns the value of the `SO_ERROR` option.",35,[[["self"]],["result",["option","error"]]]],[11,"shutdown","","Shuts down the read, write, or both halves of this…",35,[[["self"],["shutdown"]],["result",["error"]]]],[11,"read_bufs","","Read in a list of buffers all at once.",35,N],[11,"write_bufs","","Write a list of buffers all at once.",35,N]],"paths":[[3,"Token"],[8,"Evented"],[4,"Reaction"],[3,"Chain"],[3,"And"],[3,"Map"],[3,"ReactiveGenerator"],[3,"Mono"],[3,"ReactiveConsumer"],[8,"Reactor"],[3,"EventedReactor"],[4,"SystemEvent"],[3,"System"],[3,"ReactiveTcpListener"],[8,"StreamRef"],[3,"Stream"],[3,"ReactiveUdsListener"],[4,"Capacity"],[3,"ReactiveQueue"],[3,"Queue"],[3,"ReactiveDeque"],[3,"Dequeue"],[3,"SignalSender"],[3,"SignalReceiver"],[3,"ReactiveSignalReceiver"],[3,"Broadcast"],[4,"Error"],[3,"PreVec"],[3,"Event"],[3,"PollOpt"],[3,"Poll"],[3,"Ready"],[3,"TcpStream"],[3,"TcpListener"],[3,"UnixListener"],[3,"UnixStream"],[3,"ReactiveBroadcast"],[6,"ReactiveTcpStream"],[6,"ReactiveUdsStream"]]};
initSearch(searchIndex);addSearchOptions(searchIndex);
