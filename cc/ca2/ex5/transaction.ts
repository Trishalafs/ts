import { Product } from "../ex1/product";
import { Discounts } from "../ex2/discounts";
import { Customer } from "../ex3/customer";

export class Transaction{

    static calculateTotal(product:Product[]){
    let total=0;

    product.forEach(product=>{
        const discount=Discounts.calculateDiscount(product.category);

        const new_price=Discounts.applyDiscount(product.price,discount);

        total+=new_price;

    });

    console.log(`total = ${total}`);

}

}