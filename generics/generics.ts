const echo = (object: any): any => object
console.log(echo('Teste'))
console.log(echo(27))
console.log(echo({ name: 'Teste', age: 27 }))

function echoUp<T> (object: T) {
    return object
}