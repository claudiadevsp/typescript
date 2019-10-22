"use strict";
class Object2d {
    constructor(base = 0, height) {
        this.base = base;
        this.height = height;
    }
}
class Rectangle extends Object2d {
    area() {
        return this.base * this.height;
    }
}
const rectangle = new Rectangle(10, 7);
console.log(rectangle.area());
