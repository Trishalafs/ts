import { Product } from "../ex1/product";
import { Inventory } from "./inventory";

const egg=new Product('Egg',6,'Diary');
const pen=new Product('Pen',10,'Stationary');
const book=new Product('Book A',40,'Book');
const notebook=new Product('Note',50,'Stationary');
const apple=new Product('Apple',30,'Fruit');

const itemegg=new Inventory.InventoryItem(egg,50);
const itempen=new Inventory.InventoryItem(pen,10);
const itembook=new Inventory.InventoryItem(book,20);
const itemnotebook=new Inventory.InventoryItem(notebook,30);
const itemapple=new Inventory.InventoryItem(apple,30);

console.log('Before Restocking');
Inventory.InventoryItem.checkStock(itemegg);
Inventory.InventoryItem.checkStock(itempen);
Inventory.InventoryItem.checkStock(itemnotebook);

Inventory.InventoryItem.addStock(itemegg,5);
Inventory.InventoryItem.addStock(itempen,10);
Inventory.InventoryItem.addStock(itemnotebook,5);

console.log('\nAfter Restocking');
Inventory.InventoryItem.checkStock(itemegg);
Inventory.InventoryItem.checkStock(itempen);
Inventory.InventoryItem.checkStock(itemnotebook);
