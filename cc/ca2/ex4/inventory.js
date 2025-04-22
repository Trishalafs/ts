"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Inventory = void 0;
var Inventory;
(function (Inventory) {
    var InventoryItem = /** @class */ (function () {
        function InventoryItem(product, stockQuantity) {
            if (stockQuantity === void 0) { stockQuantity = 0; }
            this.product = product;
            this.stockQuantity = stockQuantity;
        }
        InventoryItem.addStock = function (item, quantity) {
            item.stockQuantity += quantity;
        };
        InventoryItem.checkStock = function (item) {
            console.log("".concat(item.product.name, " - ").concat(item.stockQuantity));
        };
        return InventoryItem;
    }());
    Inventory.InventoryItem = InventoryItem;
})(Inventory || (exports.Inventory = Inventory = {}));
