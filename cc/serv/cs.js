// server.js
const http = require('http');
const fs = require('fs');
const path = require('path');
const socketio = require('socket.io');

const PORT = 3012;

// Create an HTTP server
const server = http.createServer((req, res) => {
    // Serve the index.html file when root URL is requested
    if (req.url === '/') {
        fs.readFile(path.join(__dirname, 'index.html'), (err, data) => {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                return res.end('Error loading index.html');
            }
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(data);
        });
    } else if (req.url === '/favicon.ico') {
        // Optional: handle favicon requests to avoid errors
        res.writeHead(204);
        res.end();
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('404 Not Found');
    }
});

// Start the HTTP server
server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});

// Initialize Socket.IO with the HTTP server
const io = socketio(server);

// Listen for client connections
io.on('connection', (socket) => {
    console.log('A user connected');

    // Listen for incoming chat messages from clients
    socket.on('chat message', (msg) => {
        // Broadcast the message to all connected clients
        io.emit('chat message', msg);
    });

    // Log disconnection
    socket.on('disconnect', () => {
        console.log('A user disconnected');
    });
});
