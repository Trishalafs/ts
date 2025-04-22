import { Discounts } from "./discounts";
import { Product } from "../ex1/product";

const book= new Product('Book A',30,'Book');
const notebook=new Product('Note',40,'Stationary');
const pen=new Product('Pen',10,'Stationary');

function applydiscount(product:Product):void{

    const discount=Discounts.calculateDiscount(product.category);

    const new_price=Discounts.applyDiscount(product.price,discount);

    console.log(`\n\n name: ${product.name} \n categore: ${product.category}
         original price: ${product.price} \n discount: ${discount} 
         new price: ${new_price}`);

}

applydiscount(book);
applydiscount(notebook);
applydiscount(pen);