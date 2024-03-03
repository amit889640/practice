const event = require('events');

const triggerEvent = new event.EventEmitter();

triggerEvent.on('trigger', () => {
    console.log('Event triggered has been emitted');
})


triggerEvent.emit('trigger')