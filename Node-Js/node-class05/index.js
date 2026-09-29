const EventEmitter=require('events');
const emitter= new EventEmitter();

emitter.on('userlogin',(username)=>{
console.log(`Welcome back, ${username}!`);
});

emitter.emit('userlogin','umehani');