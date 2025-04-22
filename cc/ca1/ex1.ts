class Person{
    firstName:string;
    lastName:string;
    age:number;

    constructor(firstName:string,lastName:string,age:number){
        this.firstName=firstName;
        this.lastName=lastName;
        this.age=age;
    }
    Intro():string{
        return `Hello, my name is ${this.firstName} ${this.lastName} and I am ${this.age} years old`;
    }
}

const sam=new Person("Keerthi","Chandru",25);
console.log(sam.Intro());