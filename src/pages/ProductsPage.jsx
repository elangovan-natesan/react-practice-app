import { useEffect } from "react";
import ProductList from "../components/shop/ProductList";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useAppContext } from "../context/AppContext";
import { useSelector } from "react-redux";

export default function ProductsPage() {
  const [productsByCategory, setProductsByCategory] = useState(null);
  // const { products } = useAppContext();
  const products = useSelector((reducer) => {
    return reducer.allProducts;
  });

  const { id } = useParams();

  useEffect(() => {
    console.log("Product Page component mounted");

    if (products) {
      const productsByCategory = products.categories.find(
        (category) => category.id == id
      );
      setProductsByCategory(productsByCategory.products);
    }

    return () => {
      console.log("Products Page component is unmounted");
    };
  }, [products]);
  return (
    <>
      {!productsByCategory ? (
        <h3>Loading...</h3>
      ) : (
        <div className="container">
          <div className="row m-2 g-3">
            {Array.isArray(productsByCategory) &&
            productsByCategory.length > 0 ? (
              <ProductList products={productsByCategory} />
            ) : (
              <h3>No Products Available</h3>
            )}
          </div>
        </div>
      )}
    </>
  );
}
