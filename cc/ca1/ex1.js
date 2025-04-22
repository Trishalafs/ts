var Person = /** @class */ (function () {
    function Person(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    Person.prototype.Intro = function () {
        return "Hello, my name is ".concat(this.firstName, " ").concat(this.lastName, " and I am ").concat(this.age, " years old");
    };
    return Person;
}());
var sam = new Person("Keerthi", "Chandru", 25);
console.log(sam.Intro());
