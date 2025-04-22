export class Product{
    public name:string;
    public price:number;
    public category:string;

    constructor(name:string,price:number,category:string){
        this.name=name;
        this.price=price;
        this.category=category;
    }
    
    display(): void{
        console.log(`Name: ${this.name}, Price: ${this.price}, Category: ${this.category}`);
    }

    static products: Product[] =[];

    static addproduct(product:Product): void{
        Product.products.push(product);
    }

    static listproducts(): void{
        if(Product.products.length == 0){
            console.log(`No products available`);
        }
        else{
            console.log(`Product list`)
            Product.products.forEach(product=>product.display())
        }
    }

}