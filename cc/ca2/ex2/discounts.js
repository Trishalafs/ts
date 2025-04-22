"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Discounts = void 0;
var Discounts;
(function (Discounts) {
    function calculateDiscount(category) {
        switch (category.toLowerCase()) {
            case 'stationary':
                return 0.05;
            case 'book':
                return 0.10;
            case 'fruit':
                return 0.15;
            case 'diary':
                return 0.08;
            default:
                return 0;
        }
    }
    Discounts.calculateDiscount = calculateDiscount;
    function applyDiscount(price, discount) {
        return price - (price * discount);
    }
    Discounts.applyDiscount = applyDiscount;
})(Discounts || (exports.Discounts = Discounts = {}));
