
function logarClass(constructor: Constructor) {
    console.log(constructor)
}

function decoratorNull(_: Function) {}

function logarClassSe(value: boolean) {
    return value ? logarClass : decoratorNull
}

function decorator(obj: {a: string, b?: number}) {
    return function(_: Function): void {
        console.log(obj.a + ' ' + obj.b)
    }
}
//@logarClass
@logarClassSe(false)
// @decorator({a:'teste', b:123})
class Eletrodomestic {
    constructor() {
       
    }
}
type Constructor = { new (...args: any[]): {} }

function logObject(constructor: Constructor) {
    return class extends constructor {

    }
}