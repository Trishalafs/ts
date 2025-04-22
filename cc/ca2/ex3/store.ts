import { Customer } from "./customer";
import { Product } from "../ex1/product";

const orange= new Product('Orange',50,'Fruit');
const pen = new Product('Pen',10,'Stationary');
const egg= new Product('Egg',6,'Diary');
const book=new Product('Book A',40,'Book');
const notebook=new Product('Note',40,'Stationary');

const customer1=new Customer('Anu','anu1234@gmail.com');
const customer2=new Customer('Carlyn','carlyndawnjacintha@gmail.com');


customer1.addPurchasedProduct(orange);
customer1.addPurchasedProduct(egg);
customer1.addPurchasedProduct(pen);

customer2.addPurchasedProduct(pen);
customer2.addPurchasedProduct(book);
customer2.addPurchasedProduct(notebook);

customer1.listCustomerPurchase();
customer2.listCustomerPurchase();