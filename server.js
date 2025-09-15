

// Load the http and fs modules
const http = require('http');
const fs = require('fs');


// To create the server using http module
const server = http.createServer((req, res) => {


  // Log the requested URL
  console.log('Request URL:', req.url);


  // Serve Home Page
  if (req.url === '/' || req.url === '/index') {
    fs.readFile('./index.html', (err, data) => {
      if (err) {
        res.writeHead(500);
        res.end('Server Error');
      } else {
        res.setHeader('Content-Type', 'text/html');
        res.writeHead(200);
        res.end(data);
      }
    });


  // Serve About Page
  } else if (req.url === '/about') {
    fs.readFile('./about.html', (err, data) => {
      if (err) {
        res.writeHead(500);
        res.end('Server Error');
      } else {
        res.setHeader('Content-Type', 'text/html');
        res.writeHead(200);
        res.end(data);
      }
    });


  // Serve Contact Page
  } else if (req.url === '/contact') {
    fs.readFile('./contact.html', (err, data) => {
      if (err) {
        res.writeHead(500);
        res.end('Server Error');
      } else {
        res.setHeader('Content-Type', 'text/html');
        res.writeHead(200);
        res.end(data);
      }
    });


  // Serve CSS File (Bonus Part)
  } else if (req.url === '/style.css') {
    fs.readFile('./style.css', (err, data) => {
      if (err) {
        res.writeHead(500);
        res.end('Server Error');
      } else {
        res.setHeader('Content-Type', 'text/css');
        res.writeHead(200);
        res.end(data);
      }
    });


  // Show 404 Page for unknown routes
  } else {
    res.writeHead(404, { 'Content-Type': 'text/html' });
    res.end('<h1>404 - Page Not Found</h1>');
  }
});


// Set the server to listen on port 3000
server.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
