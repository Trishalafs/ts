import { Product } from "../ex1/product";
import { Customer } from "../ex3/customer";
import { Transaction } from "./transaction";

const egg=new Product('Egg',6,'Diary');
const pen=new Product('Pen',10,'Stationary');
const book=new Product('Book A',40,'Book');
const notebook=new Product('Note',50,'Stationary');
const apple=new Product('Apple',30,'Fruit');


const customer1=new Customer('Anu','anu1234@gmail.com');
const customer2=new Customer('Carlyn','carlyndawnjacintha@gmail.com');


customer1.addPurchasedProduct(apple);
customer1.addPurchasedProduct(egg);
customer1.addPurchasedProduct(pen);

customer2.addPurchasedProduct(pen);
customer2.addPurchasedProduct(book);
customer2.addPurchasedProduct(notebook);

customer1.listCustomerPurchase();
Transaction.calculateTotal(customer1.purchasedProduct);

customer2.listCustomerPurchase();
Transaction.calculateTotal(customer2.purchasedProduct);
