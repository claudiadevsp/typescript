"use strict";
class Math1 {
    static areaCircle(lightning) {
        return this.PI * lightning * lightning;
    }
}
Math1.PI = 3.1416;
console.log(Math1.areaCircle(4));
