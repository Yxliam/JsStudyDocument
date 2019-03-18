function Person() {

}
var person = new Person();
var person1 = new Person();
person.name = 'Xliam';
console.log(person.name) // Xliam
console.log(Person);
console.log(person1);
console.log(person===person1);

console.log(person.__proto__ === Person.prototype);
console.log(Person === Person.prototype.constructor);
console.log( Person.constructor);
console.log(Person === person.constructor)