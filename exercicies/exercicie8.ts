class Ferrari extends Car {

    constructor(model:string, maxVelocity:number) {
        super('Ferrari', model, maxVelocity)
    }

    public speed(): number {
        return this.velocityAlter(205)
    }

    public brake(): number {
        return this.velocityAlter(-15)
    }
}
const f40 = new Ferrari('F40', 324)
console.log(`${f40.brand} ${f40.model}`)
console.log(f40.speed())
console.log(f40.brake())