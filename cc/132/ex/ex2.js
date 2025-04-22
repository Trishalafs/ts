function greetUser(name, greeting) {
    if (greeting === void 0) { greeting = 'Hello'; }
    return "".concat(greeting, ", ").concat(name, "!");
}
console.log(greetUser('Anu'));
console.log(greetUser('Carolyn', 'Good morning'));
console.log(greetUser('keerthi', 'hi'));
