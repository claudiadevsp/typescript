class Product {
    constructor(
        public name: string, 
        public price: number, 
        public discount: number = 0
    ) {}
}
const product = new Product('Claudia', 12.00, 1)

console.log(product)