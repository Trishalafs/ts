var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Shape = /** @class */ (function () {
    function Shape() {
    }
    Shape.prototype.describe = function () {
        return "This is a shape";
    };
    return Shape;
}());
var Rectangle = /** @class */ (function (_super) {
    __extends(Rectangle, _super);
    function Rectangle(length, breadth) {
        var _this = _super.call(this) || this;
        _this.length = length;
        _this.breadth = breadth;
        return _this;
    }
    Rectangle.prototype.area = function () {
        return this.length * this.breadth;
    };
    return Rectangle;
}(Shape));
var rect = new Rectangle(5, 10);
console.log(rect.describe());
console.log("The area of the rectange", rect.area());
