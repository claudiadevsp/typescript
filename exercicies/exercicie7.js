"use strict";
class Car {
    constructor(brand, model, maxVelocity = 200) {
        this.brand = brand;
        this.model = model;
        this.maxVelocity = maxVelocity;
        this.actualVelocity = 0;
    }
    velocityAlter(delta) {
        const velocityNew = this.actualVelocity + delta;
        const validVelocity = velocityNew >= 0 && velocityNew <= this.maxVelocity;
        if (validVelocity) {
            this.actualVelocity = velocityNew;
        }
        else {
            this.actualVelocity = delta > 0 ? this.maxVelocity : 0;
        }
        return this.actualVelocity;
    }
    speed() {
        return this.velocityAlter(5);
    }
    brake() {
        return this.velocityAlter(-5);
    }
}
const car = new Car('Ford', 'Ka', 185);
Array(50).fill(0).forEach(() => car.speed());
console.log(car.speed());
Array(7).fill(0).forEach(() => car.brake());
console.log(car.brake());
