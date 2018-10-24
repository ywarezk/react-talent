// prototype

// 1. object

const myFirstPrototype = {
    hello: 'world',
    sayHello: () => console.log('hello world')
};

const childOfFirstPrototype = Object.create(myFirstPrototype)

// childOfFirstPrototype.__proto__ === myFirstPrototype

const myNumber = 10;

// Object.create(null)

function Person(name) {
    this.name = name;
    this.sayHello = function() {
        console.log(this.name);
    }
}

Person.prototype.foo = function() {
    console.log('foo bar');
}

const yariv = new Person('yariv');

// const yariv = Object.create(Person.prototype);
// Person.call(yariv, 'yariv')

Person.prototype.age = 33;

// when making instance i create a prototype chain
// first element is the instance - yariv
// second element in chain is Person.prototype
// yariv.__proto__ ==== Person.prototype
// all instance will get all the properties in Person.prototype
// the instance are saving sayHello in the instance itself if 100 instance then 100 say hellos
// foo is created once in the prototype chain for 100 instance there will be only one 1 foo

let something3 = {foo: 'bar', hello: 'world'};

Object.prototype.sayHello = 'stam';

something3.newProperty = 'Norel';

// Object.defineProperty(something3, 'newProperty', {enum: true})

// this loop will iterate on the prototype chain
// look all the properties that are defined as enumerables
// print them
// the usual way will add enumrable property.

for (let item in something3) {
    console.log(item);
}

for (let item in Object.keys(something3)) {

}

