"use strict";
//string
let name1 = "Joao e Maria 22222222---------";
console.log(name1);
//numbers
let age = 27.28;
console.log(age);
//boolean
let hasHobbies = true;
console.log(hasHobbies);
//array
let hobbies = ['cook', 'sport'];
console.log(hobbies[1]);
//array2
let hobbies2 = ['cook', 'sport'];
console.log(hobbies2[0]);
//Tuple
let address = ['teste222222222', 1];
console.log(address[0]);
//enums
var Color;
(function (Color) {
    Color[Color["Gray"] = 0] = "Gray";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
    Color[Color["Orange"] = 3] = "Orange";
    Color[Color["Yellow"] = 4] = "Yellow";
    Color[Color["Red"] = 5] = "Red";
})(Color || (Color = {}));
let myColor = Color.Green;
console.log(myColor);
console.log(Color.Blue);
console.log(Color.Orange, Color.Yellow);
console.log(Color.Green, Color.Red);
const returnName = () => {
    return name1;
};
console.log(returnName());
const printTest = () => {
    console.log('Teste');
};
const multiply = (num1, num2) => {
    return num1 * num2;
};
printTest();
//variable type function
let calculate;
calculate = multiply;
console.log(calculate(2, 3));
let users = {
    name: 'Joao',
    age: 27
};
