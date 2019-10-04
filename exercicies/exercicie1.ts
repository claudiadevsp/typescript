const employee: { name: Array<String>} = {

    name : [ 'João', 'Maria', 'José' ]
}

console.log(employee.name[0])

const point = (hour: number): string => {    
    return (hour <= 8) ? 'Ponto normal' : 'Fora do horario'
}
console.log(point(10))
