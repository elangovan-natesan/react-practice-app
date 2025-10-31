const express = require("express");
const app = express();
const PORT = 5000;
const products = require("./data/products.json");
const cors = require("cors");

// Serve static files from "public"
app.use(express.static("public"));

app.use(cors());

// Example API route
app.get("/api/products", (req, res) => {
  res.json(products);
});

// Example POST route
app.use(express.json());
app.post("/api/add", (req, res) => {
  console.log("Received data:", req.body);
  res.json({ message: "User added successfully", data: req.body });
});

// Start server
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
