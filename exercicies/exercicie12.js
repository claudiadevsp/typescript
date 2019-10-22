"use strict";
class Sum extends Calculation {
    execute(...numbers) {
        this.result = numbers.reduce((t, a) => t + a);
    }
}
class Multiple extends Calculation {
    execute(...numbers) {
        this.result = numbers.reduce((t, a) => t * a);
    }
}
let c1 = new Sum();
c1.execute(2, 3, 4, 5, 6, 7, 8);
console.log(c1.getResult());
c1 = new Multiple();
c1.execute(2, 3, 4, 5, 6, 7, 8);
console.log(c1.getResult());
