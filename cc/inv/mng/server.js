// server.js
const express = require('express');
const path = require('path');

const app = express();
const port = 3007;

// Array to store products in memory (for this demo)
let products = [];

// Middleware to serve static files (CSS, JS)
app.use(express.static(path.join(__dirname, 'public')));

// Middleware to parse JSON data in request bodies
app.use(express.json());

// Serve the main HTML file for the root path
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Route to add a new product to the inventory
app.post('/add-product', (req, res) => {
  const { productNumber, name, quantity } = req.body;

  // Check if the product number already exists
  const existingProduct = products.find(product => product.productNumber === productNumber);
  if (existingProduct) {
    return res.status(400).json({ message: "Product number already exists." });
  }

  // Add new product
  const newProduct = { productNumber, name, quantity };
  products.push(newProduct);
  
  res.status(201).json({ message: "Product added successfully!", product: newProduct });
});

// Route to retrieve product details by product number
app.get('/product/:productNumber', (req, res) => {
  const productNumber = req.params.productNumber;

  // Find the product by product number
  const product = products.find(p => p.productNumber === productNumber);
  
  if (!product) {
    return res.status(404).json({ message: "Product not found." });
  }

  res.json(product);
});

// Route to get all products
app.get('/products', (req, res) => {
  res.json(products);
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
