"use strict";
class Unic {
    constructor() {
    }
    static getInstance() {
        return Unic.instance;
    }
    now() {
        return new Date;
    }
}
Unic.instance = new Unic;
console.log(Unic.getInstance().now());
