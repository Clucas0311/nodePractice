// to bring the file in you need to first create a variable
// then assign it to the require and path
// const person = require('./person');
// console.log(person);
// console.log(person.name);

// export the person class
const Person = require('./person');

const person1 = new Person('John Doe', 30);

person1.greeting();
