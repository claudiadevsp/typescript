const avaliations: Array<number> = [10, 9, 3, 7.5]
avaliations.push(8.9)
console.log(avaliations)

function elementPrint<T>(args: T[]) {
    args.forEach(element => console.log(element))
}

elementPrint([1,2,3])
elementPrint<number>([1,2,3])
elementPrint<string>(['Teste', 'Teste2', 'Teste3'])
elementPrint<{name: string, age: number}>([
    { name: 'Teste', age: 22},
    { name: 'Teste2', age: 23},
    { name: 'Teste3', age: 24}
])

type Student = { name: string, age: number}
elementPrint<Student> ([
    { name: 'Teste1', age: 33 },
    { name: 'Teste2', age: 34 },
    { name: 'Teste3', age: 36 }
])

type Echo = <T>(data: T) => T
const callEcho: Echo = echoUp
console.log(callEcho<string>('Testando echo melhorado'))

//Class with Generics 
abstract class BinaryOperation<T, N> {
    constructor(public operation1: T, public operation2: T) 
    {}
    abstract execute(): N        
    
}

class BinarySum extends BinaryOperation<number, number> {
    execute(): number {
        return this.operation1 + this.operation2
    }
}

console.log(new BinarySum(2, 3).execute())

class DiferenceBetweenDates extends BinaryOperation<Data, string> {
    getTime(data: Data):number {
        let { day, month, year } = data
        return new Date(`${month}/${day}/${year}`).getTime()        
    }   

    execute(): string {
        const t1 = this.getTime(this.operation1)
        const t2 = this.getTime(this.operation2)
        const diference = Math.abs(t1 - t2)
        const day = 1000 * 60 * 60 * 24
        return `${Math.ceil(diference / day)} day(s)`
    }
}

const d1 = new Data(1,2,2021)
const d2 = new Data(5,2,2021)
console.log(new DiferenceBetweenDates(d1, d2).execute())


