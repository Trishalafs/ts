function getFullName(firstName: string, lastName?: string): string {
    return lastName ? `${firstName} ${lastName}` : firstName;
}

console.log(getFullName('Jayashre', 'Gnanavel'));
console.log(getFullName('Rohit'));
