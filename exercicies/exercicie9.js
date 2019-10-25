"use strict";
class Person {
    constructor() {
        this._age = 0;
    }
    get age() {
        return this._age;
    }
    set age(value) {
        if (value >= 0 && value <= 120) {
            this._age = value;
        }
    }
}
// const person = new Person
// person.age = 19
// console.log(person)
