const EventEmitter = require('events');
// creates a random format of an id
const uuid = require('uuid');

class Logger extends EventEmitter {
	log(msg) {
		// call  event
		this.emit('message', { id: uuid.v4(), msg });
	}
}
module.exports = Logger;
