"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var discounts_1 = require("./discounts");
var product_1 = require("../ex1/product");
var book = new product_1.Product('Book A', 30, 'Book');
var notebook = new product_1.Product('Note', 40, 'Stationary');
var pen = new product_1.Product('Pen', 10, 'Stationary');
function applydiscount(product) {
    var discount = discounts_1.Discounts.calculateDiscount(product.category);
    var new_price = discounts_1.Discounts.applyDiscount(product.price, discount);
    console.log("\n\n name: ".concat(product.name, " \n categore: ").concat(product.category, "\n         original price: ").concat(product.price, " \n discount: ").concat(discount, " \n         new price: ").concat(new_price));
}
applydiscount(book);
applydiscount(notebook);
applydiscount(pen);
