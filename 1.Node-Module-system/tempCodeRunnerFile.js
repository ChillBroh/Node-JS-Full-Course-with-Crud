emitter.on('messageLogged', (e) => {
  console.log('Listner called', e);
});

emitter.emit('messageLogged', { id: 1, url: 'http://' });