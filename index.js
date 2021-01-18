// to bring the file in you need to first create a variable
// then assign it to the require and path
// const person = require('./person');
// console.log(person);
// console.log(person.name);

// export the person class
// const Person = require('./person');

// const person1 = new Person('John Doe', 30);

// person1.greeting();

const Logger = require('./logger');

const logger = new Logger();

logger.on('message', (data) => console.log('Called Listener', data));

logger.log('Hello World');
logger.log('Hi');
logger.log('Hello');
