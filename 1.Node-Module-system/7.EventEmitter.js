const EventEmitter = require('events');
const emitter = new EventEmitter();

//register listner
emitter.on('messageLogged', (e) => {
  console.log('Listner called', e);
});

//raise an event
emitter.emit('messageLogged', { id: 1, url: 'http://' });
