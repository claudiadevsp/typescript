"use strict";
class Product {
    constructor(name, price, discount = 0) {
        this.name = name;
        this.price = price;
        this.discount = discount;
    }
    resume() {
        return `${this.name} custa R$${this.price} (${this.discount * 100}% off) valor com desconto ${this.discountPrice()}`;
    }
    discountPrice() {
        return (this.price * (1 - this.discount));
    }
}
const product = new Product('Claudia', 12.00, 0.5);
console.log(product.resume());
