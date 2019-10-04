//string
let name1: string = "Joao e Maria 22222222---------"
console.log(name1)

//numbers
let age: number = 27.28
console.log(age)

//boolean
let hasHobbies: boolean = true
console.log(hasHobbies)

//array
let hobbies: string[] = ['cook', 'sport']
console.log(hobbies[1])

//array2
let hobbies2: Array<String> = ['cook', 'sport']
console.log(hobbies2[0])

//Tuple
let address: [string, number]  = ['teste222222222', 1]
console.log(address[0])

//enums
enum Color {
    Gray, 
    Green ,
    Blue ,
    Orange,
    Yellow,
    Red
}
let myColor: Color =  Color.Green
console.log(myColor)

console.log(Color.Blue)
console.log(Color.Orange, Color.Yellow)
console.log(Color.Green, Color.Red)

const returnName = (): string => {
    return name1
}

console.log(returnName())

const printTest = (): void => {
    console.log('Teste')
}

const multiply = (num1: number, num2: number): number => {
    return num1 * num2
}

printTest()

//variable type function
let calculate : (numA: number, numB: number) => number 


calculate = multiply
console.log(calculate(2, 3))


let users: {name: string, age: number} = {
    name: 'Joao',
    age: 27
}

