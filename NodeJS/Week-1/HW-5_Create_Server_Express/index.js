const express = require("express");
const app = express();

// Index Page
app.get("/", (req, res) => {
  res.send("<h1>Welcome to Index Page</h1>");
});

// About Page
app.get("/about", (req, res) => {
  res.send("<h1>Welcome to About Page</h1>");
});

// Contact Page
app.get("/contact", (req, res) => {
  res.send("<h1>Welcome to Contact Page</h1>");
});

// not Found Page
app.get("*", (req, res) => {
  res.send("<h1>404 Page not Found</h1>");
});

const port = 3000; // Static Port

app.listen(port); // Assign Port
