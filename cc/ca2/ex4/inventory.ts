import { Product } from "../ex1/product";

export namespace Inventory{

    export class InventoryItem {
        product: Product;
        stockQuantity:number;
        
        constructor(product:Product,stockQuantity:number=0){
            this.product=product;
            this.stockQuantity=stockQuantity;
        }
        static addStock(item:InventoryItem,quantity:number):void{
            item.stockQuantity+=quantity;
        }
        static checkStock(item:InventoryItem):void{
            console.log(`${item.product.name} - ${item.stockQuantity}`);
        }
    
    }

}