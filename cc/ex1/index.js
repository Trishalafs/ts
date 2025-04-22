"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var http_1 = require("http");
// Function to determine the type of the input data
function getType(value) {
    return typeof value;
}
// Create HTTP server
var server = http_1.default.createServer(function (req, res) {
    var url = req.url || '';
    if (url.startsWith('/type')) {
        var query = new URLSearchParams(url.split('?')[1]);
        var value = query.get('value');
        if (value !== null) {
            // Determine the type of the given value and send a response
            var valueType = getType(value);
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ value: value, type: valueType }));
        }
        else {
            res.writeHead(400, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ error: 'No value provided' }));
        }
    }
    else {
        res.writeHead(404, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'Endpoint not found' }));
    }
});
// Start the server on port 3000
server.listen(3000, function () {
    console.log('Server is running on http://localhost:3000');
});
