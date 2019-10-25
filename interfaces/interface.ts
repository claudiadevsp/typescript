namespace Hi {
    interface Human {
        name: string
        age?: number
        [prop: string]: any
        greet( lastname: string ): void
    }
    const hi = ( person: Human ) => {
        console.log('Hello ' + person.name)
    }
    const person: Human = {
        name: 'Claudia',
        age: 22,
        greet(lastName: string) {
            console.log('Hello' + this.name + ' ' + lastName)
        }
    }    
    const changeName = ( person: Human ) => {
        person.name = 'Claudia2'
    }
    hi(person)
    changeName(person)
    hi(person)
    //hi( { name:'TESTE', age:10, height: '1.65' } )
    person.geet('Silva')   

    class Client implements Human {
    
        public name: string = ''
    
        greet(lastName: string) {
            console.log('Hello' + this.name + lastName)
        }
    }    
    const myClient = new Client()
    myClient.name = 'Test'
    hi(myClient)
    myClient.greet('Silva')
}

interface calculeFunction {
    ( a: number, b: number ): number 
}

let power: calculeFunction

power = ( base: number, exp: number ): number  => {
    return Array(exp).fill(base).reduce( (t,a) => t * a )
}

interface A {
    a(): void
}

interface B {
    b(): void
}

interface ABC extends A, B {
    c(): void 
}

class RealA implements A {
    a(): void {}
}

class RealAB implements A, B {
    a(): void {}
    b(): void {}
}

class RealABC implements ABC {
    a(): void {}
    b(): void {}
    c(): void {}
}

const teste = (b: B) => {}
teste(new RealABC)

abstract class AbstractABD implements A, B {
    a(): void {}
    b(): void {}
    abstract d(): void
}