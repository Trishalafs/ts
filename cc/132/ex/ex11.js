function getFullName(firstName, lastName) {
    return lastName ? "".concat(firstName, " ").concat(lastName) : firstName;
}
console.log(getFullName('Jayashre', 'Gnanavel'));
console.log(getFullName('Rohit'));
