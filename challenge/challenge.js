"use strict";
class Motorcycle {
    constructor(name) {
        this.name = name;
        this.velocity = 0;
    }
    honk() {
        console.log('Toooooooooot!');
    }
    speed(delta) {
        return this.velocity = this.velocity + delta;
    }
}
const motoCircle = new Motorcycle('Ducati');
motoCircle.honk();
console.log(motoCircle.velocity);
motoCircle.speed(30);
console.log(motoCircle.velocity);
