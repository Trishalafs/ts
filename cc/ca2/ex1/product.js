"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
var Product = /** @class */ (function () {
    function Product(name, price, category) {
        this.name = name;
        this.price = price;
        this.category = category;
    }
    Product.prototype.display = function () {
        console.log("Name: ".concat(this.name, ", Price: ").concat(this.price, ", Category: ").concat(this.category));
    };
    Product.addproduct = function (product) {
        Product.products.push(product);
    };
    Product.listproducts = function () {
        if (Product.products.length == 0) {
            console.log("No products available");
        }
        else {
            console.log("Product list");
            Product.products.forEach(function (product) { return product.display(); });
        }
    };
    Product.products = [];
    return Product;
}());
exports.Product = Product;
