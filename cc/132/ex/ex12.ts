function processData(num: number, callback: (num: number) => number): number {
    return callback(num);
}

const result = processData(5, (num) => num + 2);
console.log(result);
