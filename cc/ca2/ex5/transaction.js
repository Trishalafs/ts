"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Transaction = void 0;
var discounts_1 = require("../ex2/discounts");
var Transaction = /** @class */ (function () {
    function Transaction() {
    }
    Transaction.calculateTotal = function (product) {
        var total = 0;
        product.forEach(function (product) {
            var discount = discounts_1.Discounts.calculateDiscount(product.category);
            var new_price = discounts_1.Discounts.applyDiscount(product.price, discount);
            total += new_price;
        });
        console.log("total = ".concat(total));
    };
    return Transaction;
}());
exports.Transaction = Transaction;
