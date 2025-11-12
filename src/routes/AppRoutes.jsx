import { Routes, Route } from "react-router-dom";
import ProductsPage from "../pages/ProductsPage";
import CategoryPage from "../pages/CategoryPage";
import CartPage from "../pages/CartPage";
import PersonalDetails from "../components/forms/PersonalDetails";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<CategoryPage />} />
      <Route path="/dashboard" element={<CategoryPage />} />
      <Route path="/products/:id" element={<ProductsPage />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/personalDetails" element={<PersonalDetails />} />
    </Routes>
  );
}
