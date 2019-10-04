"use strict";
//string
var name1 = "Joao e Maria 22222222---------";
console.log(name1);
//numbers
var age = 27.28;
console.log(age);
//boolean
var hasHobbies = true;
console.log(hasHobbies);
//array
var hobbies = ['cook', 'sport'];
console.log(hobbies[1]);
//array2
var hobbies2 = ['cook', 'sport'];
console.log(hobbies2[0]);
//Tuple
var address = ['teste222222222', 1];
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
var myColor = Color.Green;
console.log(myColor);
console.log(Color.Blue);
console.log(Color.Orange, Color.Yellow);
console.log(Color.Green, Color.Red);
var returnName = function () {
    return name1;
};
console.log(returnName());
var printTest = function () {
    console.log('Teste');
};
var multiply = function (num1, num2) {
    return num1 * num2;
};
printTest();
//variable type function
var calculate;
calculate = multiply;
console.log(calculate(2, 3));
var users = {
    name: 'Joao',
    age: 27
};
