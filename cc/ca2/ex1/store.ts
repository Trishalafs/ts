import { Product } from "./product";

const book= new Product('Book A',30,'Book');
const notebook=new Product('Note',40,'Stationary');
const pen=new Product('Pen',10,'Stationary');
const egg=new Product('Egg',6,'Diary');
const apple=new Product('Apple',30,'Fruit');


Product.addproduct(book);
Product.addproduct(notebook);
Product.addproduct(pen);
Product.addproduct(egg);
Product.addproduct(apple);

Product.listproducts();


