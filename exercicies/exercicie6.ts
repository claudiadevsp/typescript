class Product {
    constructor(
        public name: string, 
        public price: number, 
        public discount: number = 0
    ) {}

    public resume(): string {                
        return `${this.name} custa R$${this.price} (${this.discount * 100}% off) valor com desconto ${this.discountPrice()}`
    }

    public discountPrice(): number {
        return (this.price * (1 - this.discount))
    }
}
const product = new Product('Claudia', 12.00, 0.5)
console.log(product.resume())