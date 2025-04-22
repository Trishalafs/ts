var car = /** @class */ (function () {
    function car(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    car.prototype.drive = function () {
        return "The ".concat(this.make, " ").concat(this.model, " is driving");
    };
    return car;
}());
var car1 = new car("Toyota", "innova", 2010);
console.log(car1.drive());
