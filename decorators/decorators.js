"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function logarClass(constructor) {
    console.log(constructor);
}
function decoratorNull(_) { }
function logarClassSe(value) {
    return value ? logarClass : decoratorNull;
}
function decorator(obj) {
    return function (_) {
        console.log(obj.a + ' ' + obj.b);
    };
}
//@logarClass
let Eletrodomestic = 
// @decorator({a:'teste', b:123})
class Eletrodomestic {
    constructor() {
    }
};
Eletrodomestic = __decorate([
    logarClassSe(false)
    // @decorator({a:'teste', b:123})
], Eletrodomestic);
function logObject(constructor) {
    return class extends constructor {
    };
}
