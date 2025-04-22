var PersonGreeter = /** @class */ (function () {
    function PersonGreeter() {
    }
    PersonGreeter.prototype.greet = function () {
        return "Typescript interface example";
    };
    return PersonGreeter;
}());
var greeter = new PersonGreeter();
console.log(greeter.greet());
