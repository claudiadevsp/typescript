
function logClass(constructor: Constructor) {
    console.log(constructor)
}
function decoratorNull(_: Function) {}

function logClassSe(value: boolean) {
    return value ? logClass : decoratorNull
}
function decorator(obj: {a: string, b?: number}) {
    return function(_: Function): void {
        console.log(obj.a + ' ' + obj.b)
    }
}
//@logClass
//@logClassSe(false)
//@decorator({a:'teste', b:123})
@logObject
class Eletrodomestic {
    constructor() {
       
    }
}
type Constructor = { new (...args: any[]): {} }

function logObject(constructor: Constructor) {
    console.log('Loading ......')
    return class extends constructor {
        constructor(...args: any[]) {
            console.log('Before ......')
            super(...args)
            console.log('After......')
        }
    }
}

new Eletrodomestic()
new Eletrodomestic()
new Eletrodomestic()