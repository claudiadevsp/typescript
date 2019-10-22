"use strict";
class Ferrari extends Car {
    constructor(model, maxVelocity) {
        super('Ferrari', model, maxVelocity);
    }
    speed() {
        return this.velocityAlter(205);
    }
    brake() {
        return this.velocityAlter(-15);
    }
}
const f40 = new Ferrari('F40', 324);
console.log(`${f40.brand} ${f40.model}`);
console.log(f40.speed());
console.log(f40.brake());
