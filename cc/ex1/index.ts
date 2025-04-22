import http from 'http';
import { IncomingMessage, ServerResponse } from 'http';

// Function to determine the type of the input data
function getType(value: string | number | boolean): string {
  return typeof value;
}

// Create HTTP server
const server = http.createServer((req: IncomingMessage, res: ServerResponse) => {
  const url = req.url || '';

  if (url.startsWith('/type')) {
    const query = new URLSearchParams(url.split('?')[1]);
    const value = query.get('value');

    if (value !== null) {
      // Determine the type of the given value and send a response
      const valueType = getType(value);
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ value: value, type: valueType }));
    } else {
      res.writeHead(400, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: 'No value provided' }));
    }
  } else {
    res.writeHead(404, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ error: 'Endpoint not found' }));
  }
});

// Start the server on port 3000
server.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
