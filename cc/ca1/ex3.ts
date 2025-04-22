class Animal {
    name:string;
    sound:string;

    constructor(name:string,sound:string){
        this.name=name;
        this.sound=sound;
    }

    makeSound():string{
        return `The ${this.name} says ${this.sound}.`;
    }
}

class Dog extends Animal{
    constructor(name:string,sound:string){
        super(name,sound);
    }
    makeSound():string{
        return `The ${this.name} says Woof!`;
    }

}

const animal = new Animal("Cat","meow");
const dog=new Dog("Dog","woof");

console.log(animal.makeSound());
console.log(dog.makeSound());