import { useEffect } from "react";
import CategoryList from "../components/dashboard/CategoryList";
import { getProducts } from "../api/productApi";
import { useAppContext } from "../context/AppContext";
import { useDispatch, useSelector } from "react-redux";
import { addAllProducts } from "../redux-toolkit/store/allProductsSlice";

export default function CategoryPage() {
  // const { addAllProducts, products } = useAppContext();
  const dispatch = useDispatch();
  const products = useSelector((reducer) => {
    return reducer.allProducts;
  });

  useEffect(() => {
    console.log("Category Page component is mounted");

    // getProducts()
    //   .then((res) => {
    //     // addAllProducts(res.data);
    //     dispatch(addAllProducts(res.data));
    //     console.log(res.data);
    //   })
    //   .catch((err) => console.error(err));

    const getAllProducts = async () => {
      const res = await getProducts();
      dispatch(addAllProducts(res.data));
    };

    getAllProducts();

    return () => {
      console.log("Category Page component is unmounted");
    };
  }, []);

  return (
    <>
      {!products ? (
        <h3>Loading...</h3>
      ) : (
        <div className="container">
          <div className="row m-2 g-3">
            {Array.isArray(products.categories) &&
            products.categories.length > 0 ? (
              <CategoryList products={products} />
            ) : (
              <h3>No categories available</h3>
            )}
          </div>
        </div>
      )}
    </>
  );
}
