const { log } = require('console');
const { EventEmitter } = require('events');

const eventEmitter = new EventEmitter();
eventEmitter.on('print', (params) => {
    console.log(params);
})

eventEmitter.emit('print', ("Print Event called"))

eventEmitter.emit('prints', ("Print Event called"))