abstract class Object2d {
    constructor(public base: number= 0, public height: number) 
    {}
    abstract area(): number
}
class Rectangle extends Object2d {    
    public area(): number {
        return this.base * this.height
    }
}
const rectangle = new Rectangle(10, 7)
console.log(rectangle.area())