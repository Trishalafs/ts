function sumNumbers(...numbers: number[]): number {
    return numbers.reduce((acc, num) => acc + num, 0);
}

console.log(sumNumbers(1, 2, 3, 4,5,6));  
console.log(sumNumbers(10, 20));      
console.log(sumNumbers(5));       
console.log(sumNumbers());            
