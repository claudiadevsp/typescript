"use strict";
class Intern {
    constructor() {
        this._firstName = '';
    }
    get firstName() {
        return this._firstName;
    }
    set firstName(value) {
        if (value.length >= 3) {
            this._firstName = value;
        }
        else {
            this._firstName = '';
        }
    }
}
const intern = new Intern();
console.log(intern.firstName);
intern.firstName = 'Clau';
console.log(intern.firstName);
intern.firstName = 'Claudia';
console.log(intern.firstName);
