abstract class Shape{
    abstract area():any;

    describe():string{
        return `This is a shape`;
    }
}

class Rectangle extends Shape{
    length:number;
    breadth:number;
    constructor(length:number,breadth:number){
        super();
        this.length=length;
        this.breadth=breadth
    }
    area():any{
        return this.length*this.breadth;
    }
}

const rect = new Rectangle(5,10);

console.log(rect.describe());
console.log("The area of the rectange",rect.area());
