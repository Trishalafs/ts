"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Customer = void 0;
var Customer = /** @class */ (function () {
    function Customer(name, email) {
        this.purchasedProduct = [];
        this.name = name;
        this.email = email;
    }
    Customer.prototype.addPurchasedProduct = function (product) {
        this.purchasedProduct.push(product);
    };
    Customer.prototype.listCustomerPurchase = function () {
        if (this.purchasedProduct.length == 0) {
            console.log("No products purchased");
        }
        else {
            console.log("\n".concat(this.name, "'s Purchase List:"));
            this.purchasedProduct.forEach(function (product, index) {
                console.log("".concat(index + 1, ".").concat(product.name, " - ").concat(product.price));
            });
        }
    };
    return Customer;
}());
exports.Customer = Customer;
