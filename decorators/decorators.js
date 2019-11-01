"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function logClass(constructor) {
    console.log(constructor);
}
function decoratorNull(_) { }
function logClassSe(value) {
    return value ? logClass : decoratorNull;
}
function decorator(obj) {
    return function (_) {
        console.log(obj.a + ' ' + obj.b);
    };
}
//@logClass
//@logClassSe(false)
//@decorator({a:'teste', b:123})
let Eletrodomestic = class Eletrodomestic {
    constructor() {
    }
};
Eletrodomestic = __decorate([
    logObject
], Eletrodomestic);
function logObject(constructor) {
    console.log('Loading ......');
    return class extends constructor {
        constructor(...args) {
            console.log('Before ......');
            super(...args);
            console.log('After......');
        }
    };
}
new Eletrodomestic();
new Eletrodomestic();
new Eletrodomestic();
