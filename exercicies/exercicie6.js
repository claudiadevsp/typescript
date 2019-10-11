"use strict";
class Product {
    constructor(name, price, discount = 0) {
        this.name = name;
        this.price = price;
        this.discount = discount;
    }
}
const product = new Product('Claudia', 12.00, 1);
console.log(product);
