const http = require("http");

const server = http.createServer((req, res) => {
  const url = req.url;

  if (url === "/") {
    // Index Page
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("<h1>Welcome to Index Page</h1>");
  } else if (url === "/about") {
    // About Page
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("<h1>Welcome to About Page</h1>");
  } else if (url === "/contact") {
    // Contact Page
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("<h1>Welcome to Contact Page</h1>");
  } else {
    // not Found Page
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("<h1>404 Page not Found</h1>");
  }
  res.end();
});

const port = 5000;

server.listen(port, () => {
  console.log(`Server has been bounded at ${port}.`);
});
