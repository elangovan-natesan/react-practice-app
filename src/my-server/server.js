const express = require("express");
const app = express();
const PORT = 5000;
const products = require("./data/products.json");
const cors = require("cors");
app.use(express.static("public"));

app.use(cors());
app.get("/api/products", (req, res) => {
  res.json(products);
});

app.use(express.json());
app.post("/api/add", (req, res) => {
  console.log("Received data:", req.body);
  res.json({ message: "User added successfully", data: req.body });
});

function getProductsByCategoryId(categoryId) {
  const category = products.categories.find(
    (cat) => cat.id === parseInt(categoryId)
  );
  return category ? category.products : null;
}

app.get("/api/shop/:id", (req, res) => {
  const { id } = req.params;
  const products = getProductsByCategoryId(id);

  if (!products) {
    return res.status(404).json({ message: "Category not found" });
  }

  res.json(products);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
