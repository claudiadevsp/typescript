class Motorcycle {

    public velocity: number = 0
    constructor (public name: string) 
    {}    
    public honk(): void {
        console.log('Toooooooooot!')
    }
    public speed(delta: number): number {
        return this.velocity = this.velocity + delta
    }    
} 

const motoCircle = new Motorcycle('Ducati')
motoCircle.honk()
console.log(motoCircle.velocity)
motoCircle.speed(30)
console.log(motoCircle.velocity)
