initSidebarItems({"struct":[["Mono","A [`Mono`] reacts as soon as the [`System`] starts and produces exactly one value (the value set by the constructor). ``` # use sonr::system::{System, SystemEvent}; # use sonr::reactor::Reactor; # use sonr::reactor::producers::Mono; fn main() {     let handle = System::init().unwrap();     let gen = Mono::new(0u8).unwrap();"],["ReactiveGenerator","The [`ReactiveGenerator`] reacts as soon as the [`System`] starts. ``` # use sonr::system::{System, SystemEvent}; # use sonr::reactor::Reactor; # use sonr::reactor::producers::ReactiveGenerator; fn main() {     let handle = System::init().unwrap();     let gen = ReactiveGenerator::new(vec![0u8]).unwrap();"]]});