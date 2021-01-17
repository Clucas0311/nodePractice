// const person = {
// 	name: 'John Doe',
// 	age: '30'
// };

class Person {
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}
	greeting() {
		console.log(`My name is ${this.name} and I am ${this.age}.`);
	}
}

// TO USE this person object somewhere else:
// module.exports = person;

// TO USE FILE Somewhere else. UpperCase For Classes
module.exports = Person;
