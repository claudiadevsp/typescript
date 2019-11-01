"use strict";
const avaliations = [10, 9, 3, 7.5];
avaliations.push(8.9);
console.log(avaliations);
function elementPrint(args) {
    args.forEach(element => console.log(element));
}
elementPrint([1, 2, 3]);
elementPrint([1, 2, 3]);
elementPrint(['Teste', 'Teste2', 'Teste3']);
elementPrint([
    { name: 'Teste', age: 22 },
    { name: 'Teste2', age: 23 },
    { name: 'Teste3', age: 24 }
]);
elementPrint([
    { name: 'Teste1', age: 33 },
    { name: 'Teste2', age: 34 },
    { name: 'Teste3', age: 36 }
]);
const callEcho = echoUp;
console.log(callEcho('Testando echo melhorado'));
//Class with Generics 
class BinaryOperation {
    constructor(operation1, operation2) {
        this.operation1 = operation1;
        this.operation2 = operation2;
    }
}
class BinarySum extends BinaryOperation {
    execute() {
        return this.operation1 + this.operation2;
    }
}
console.log(new BinarySum(2, 3).execute());
class DiferenceBetweenDates extends BinaryOperation {
    getTime(data) {
        let { day, month, year } = data;
        return new Date(`${month}/${day}/${year}`).getTime();
    }
    execute() {
        const t1 = this.getTime(this.operation1);
        const t2 = this.getTime(this.operation2);
        const diference = Math.abs(t1 - t2);
        const day = 1000 * 60 * 60 * 24;
        return `${Math.ceil(diference / day)} day(s)`;
    }
}
const d1 = new Data(1, 2, 2021);
const d2 = new Data(5, 2, 2021);
console.log(new DiferenceBetweenDates(d1, d2).execute());
