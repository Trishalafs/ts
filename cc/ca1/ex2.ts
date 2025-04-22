interface car {
    make:string;
    model:string;
    year:number;
    drive():string;
}

class car implements car{
    make:string;
    model:string;
    year:number;

    constructor(make:string,model:string,year:number){
        this.make=make;
        this.model=model;
        this.year=year;
    }

    drive():string{
        return `The ${this.make} ${this.model} is driving`;
    }

}

const car1=new car("Toyota","innova",2010);

console.log(car1.drive());

