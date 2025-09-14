// This line loads the built-in http module to create the server
const http = require('http');

// This line loads the built-in fs module to read files
const fs = require('fs');

// Create the HTTP server using the http module
const server = http.createServer((req, res) => {

  // Log the incoming request URL (for testing purposes)
  console.log("Request URL:", req.url);

  // If the user visits the home page
  if (req.url === '/') {
    // Read the index.html file from the same folder
    fs.readFile('index.html', (err, data) => {
      if (err) {
        // If there is an error reading the file, send a 500 error response
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Error loading index.html');
      } else {
        // If file is found, send it with content type as HTML
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data);
      }
    });

  // If the user visits the /about page
  } else if (req.url === '/about') {
    // Read the about.html file
    fs.readFile('about.html', (err, data) => {
      if (err) {
        // If error occurs, send 500 error
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Error loading about.html');
      } else {
        // If file is found, send HTML response
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data);
      }
    });

  // If the user visits the /contact page
  } else if (req.url === '/contact') {
    // Read the contact.html file
    fs.readFile('contact.html', (err, data) => {
      if (err) {
        // Handle file read error
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Error loading contact.html');
      } else {
        // Send the contact page with proper content type
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data);
      }
    });

  // If user visits any other route (unknown path)
  } else {
    // Send a 404 response with plain text message
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('404 Page Not Found');
  }
});

// Start the server and listen on port 3000
server.listen(3000, () => {
  console.log('Server is running at http://localhost:3000');
});
