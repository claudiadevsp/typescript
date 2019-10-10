const employee: { name: string[], point: (hour:number) => string} = {
        name : [ 'João', 'Maria', 'José' ],
        point (hour: number): string {    
            return (hour <= 8) ? 'Ponto normal' : 'Fora do horario22222'
        }
    }
console.log(employee.point(10))

//////////////////////////////////////////////////////////////////////////////////


