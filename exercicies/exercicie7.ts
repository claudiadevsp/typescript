class Car {
    private actualVelocity: number  = 0
    constructor(public brand: string, public model: string, private maxVelocity: number = 200) 
    {} 
    private velocityAlter(delta: number): number {
        const velocityNew = this.actualVelocity + delta
        const validVelocity = velocityNew >= 0 && velocityNew <= this.maxVelocity
        if (validVelocity) {
            this.actualVelocity = velocityNew
        } else {
            this.actualVelocity = delta > 0 ? this.maxVelocity : 0
        }
        return this.actualVelocity
    }
    public speed(): number {
        return this.velocityAlter(5)
    }

    public brake(): number {
        return this.velocityAlter(-5)
    }
}

const car = new Car('Ford', 'Ka', 185)
Array(50).fill(0).forEach( () => car.speed())
console.log(car.speed())
Array(7).fill(0).forEach( () => car.brake())
console.log(car.brake())
