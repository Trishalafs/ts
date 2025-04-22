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
var Animal = /** @class */ (function () {
    function Animal(name, sound) {
        this.name = name;
        this.sound = sound;
    }
    Animal.prototype.makeSound = function () {
        return "The ".concat(this.name, " says ").concat(this.sound, ".");
    };
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog(name, sound) {
        return _super.call(this, name, sound) || this;
    }
    Dog.prototype.makeSound = function () {
        return "The ".concat(this.name, " says Woof!");
    };
    return Dog;
}(Animal));
var animal = new Animal("Cat", "meow");
var dog = new Dog("Dog", "woof");
console.log(animal.makeSound());
console.log(dog.makeSound());
