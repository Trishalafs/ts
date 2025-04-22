type AddFunction = (a: number, b: number) => number;

const add: AddFunction = (a, b) => a + b;

console.log('Adding 5 and 9 ',add(5, 9));
console.log('Adding 1000 and 457',add(1000,457));
