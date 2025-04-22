import { Product } from "../ex1/product";

export class Customer{
    name:string;
    email:string;
    purchasedProduct:Product[]=[];
    constructor(name:string,email:string){
        this.name=name;
        this.email=email;
    }

    addPurchasedProduct(product:Product):void{
        this.purchasedProduct.push(product);
    }

    listCustomerPurchase(){
        if(this.purchasedProduct.length==0){
            console.log(`No products purchased`);
        }
        else{
            console.log(`\n${this.name}'s Purchase List:`)
            this.purchasedProduct.forEach((product,index)=>{
                console.log(`${index+1}.${product.name} - ${product.price}`)
            });
        }
    }

}