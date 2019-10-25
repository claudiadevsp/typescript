"use strict";
var Hi;
(function (Hi) {
    const hi = (person) => {
        console.log('Hello ' + person.name);
    };
    const person = {
        name: 'Claudia',
        age: 22,
        greet(lastName) {
            console.log('Hello' + this.name + ' ' + lastName);
        }
    };
    const changeName = (person) => {
        person.name = 'Claudia2';
    };
    hi(person);
    changeName(person);
    hi(person);
    //hi( { name:'TESTE', age:10, height: '1.65' } )
    person.greet('Silva');
    class Client {
        constructor() {
            this.name = '';
        }
        greet(lastName) {
            console.log('Hello' + this.name + lastName);
        }
    }
    const myClient = new Client();
    myClient.name = 'Test';
    hi(myClient);
    myClient.greet('Silva');
})(Hi || (Hi = {}));
let power;
power = (base, exp) => {
    return Array(exp).fill(base).reduce((t, a) => t * a);
};
class RealA {
    a() { }
}
class RealAB {
    a() { }
    b() { }
}
class RealABC {
    a() { }
    b() { }
    c() { }
}
const teste = (b) => { };
teste(new RealABC);
class AbstractABD {
    a() { }
    b() { }
}
