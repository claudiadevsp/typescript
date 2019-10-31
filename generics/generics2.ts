const avaliations: Array<number> = [10, 9, 3, 7.5]
avaliations.push(8.9)
console.log(avaliations)

function print<T>(args: T[]) {
    args.forEach(element => console.log(element))
}

print([1,2,3])
print<number>([1,2,3])
print<string>(['Teste', 'Teste2', 'Teste3'])
print<{name: string, age: number}>([
    { name: 'Teste', age: 22},
    { name: 'Teste2', age: 23},
    { name: 'Teste3', age: 24}
])

type Student = { name: string, age: number}
print<Student> ([
    { name: 'Teste1', age: 33 },
    { name: 'Teste2', age: 34 },
    { name: 'Teste3', age: 36 }
])