// server.js
const http = require('http');
const fs = require('fs');
const url = require('url');
const path = require('path');

// In-memory array to store products
let products = [];

// Create HTTP server
const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true);

    // Serve static files (like CSS, JS)
    if (parsedUrl.pathname === '/index.html' || parsedUrl.pathname === '/') {
        fs.readFile(path.join(__dirname, 'public', 'index.html'), (err, data) => {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end('Error reading index.html');
            } else {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end(data);
            }
        });
    } else if (parsedUrl.pathname === '/add-product' && req.method === 'POST') {
        let body = '';
        req.on('data', chunk => {
            body += chunk;
        });

        req.on('end', () => {
            const { productNumber, name, quantity } = JSON.parse(body);

            // Check if the product number already exists
            const existingProduct = products.find(p => p.productNumber === productNumber);
            if (existingProduct) {
                res.writeHead(400, { 'Content-Type': 'application/json' });
                return res.end(JSON.stringify({ message: 'Product number already exists.' }));
            }

            // Add new product
            const newProduct = { productNumber, name, quantity };
            products.push(newProduct);

            res.writeHead(201, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ message: 'Product added successfully!', product: newProduct }));
        });
    } else if (parsedUrl.pathname.startsWith('/product') && req.method === 'GET') {
        const productNumber = parsedUrl.pathname.split('/')[2];

        const product = products.find(p => p.productNumber === productNumber);
        if (product) {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify(product));
        } else {
            res.writeHead(404, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ message: 'Product not found.' }));
        }
    } else if (parsedUrl.pathname === '/products' && req.method === 'GET') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(products));
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Not Found');
    }
});

// Start server on port 3000
server.listen(3005, () => {
    console.log('Server running at http://localhost:3000');
});
