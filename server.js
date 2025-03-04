const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 8000;

// MIME types for different file extensions
const MIME_TYPES = {
  '.html': 'text/html',
  '.css': 'text/css',
  '.js': 'text/javascript',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.txt': 'text/plain'
};

const server = http.createServer((req, res) => {
  // Handle invalid or malformed requests
  if (!req.url) {
    res.writeHead(400);
    res.end('Bad Request');
    return;
  }

  console.log(`${new Date().toISOString()} - ${req.method} ${req.url}`);
  
  // Normalize URL and get file path
  let filePath = path.join(__dirname, req.url === '/' ? 'index.html' : req.url);
  
  // Get file extension
  const extname = path.extname(filePath).toLowerCase();
  
  // Default content type is text/html
  let contentType = MIME_TYPES[extname] || 'text/html';
  
  // Read file
  fs.readFile(filePath, (err, content) => {
    if (err) {
      if (err.code === 'ENOENT') {
        // Page not found
        fs.readFile(path.join(__dirname, '404.html'), (err, content) => {
          if (err) {
            // No custom 404 page
            res.writeHead(404);
            res.end('404 - File Not Found');
          } else {
            // Custom 404 page
            res.writeHead(404, { 'Content-Type': 'text/html' });
            res.end(content, 'utf-8');
          }
        });
      } else {
        // Server error
        res.writeHead(500);
        res.end(`Server Error: ${err.code}`);
      }
    } else {
      // Success
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(content, 'utf-8');
    }
  });
});

server.listen(PORT, '127.0.0.1', () => {
  console.log(`Server running at http://localhost:${PORT}/`);
  console.log('Press Ctrl+C to stop the server.');
});

// Handle server errors
server.on('error', (err) => {
  if (err.code === 'EADDRINUSE') {
    console.error(`Error: Port ${PORT} is already in use.`);
    console.log('Try running with a different port:');
    console.log(`  PORT=8080 node server.js`);
  } else {
    console.error('Server error:', err);
  }
  process.exit(1);
});
