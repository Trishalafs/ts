interface AdditionFunction {
    (a: number, b: number): number;
}

const addition: AdditionFunction = (a, b) => a + b;

console.log(addition(9, 5));
