import { createContext, useContext, useState, useEffect } from "react";

const cartContext = createContext();
export default function AppContext({ children }) {
  const [cartItems, setCartItems] = useState([]);
  const [products, setProducts] = useState(null);

  useEffect(() => {
    console.log("App Context component mounted");
    const savedCart = localStorage.getItem("cartItems");
    const savedProducts = localStorage.getItem("products");
    try {
      if (savedCart) {
        setCartItems(JSON.parse(savedCart));
      }
    } catch (e) {
      console.error("Error parsing cartItems from localStorage", e);
      setCartItems([]);
    }
    try {
      if (savedProducts) {
        setProducts(JSON.parse(savedProducts));
      }
    } catch (e) {
      console.error("Error parsing products from localStorage", e);
      setProducts(null);
    }
    return () => {
      console.log("App Context component unmounted");
    };
  }, []);

  useEffect(() => {
    console.log("App Context component mounted");

    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    localStorage.setItem("products", JSON.stringify(products));
    return () => {
      console.log("App Context component unmounted");
    };
  }, [cartItems, products]);

  const addAllProducts = (products) => {
    setProducts(products);
  };
  const addToCart = (product) => {
    setCartItems((prev) => [...prev, product]);
  };

  const removeFromCart = (product) => {
    const updatedCartItems = cartItems.filter(
      (cartItem) => cartItem.id != product.id
    );
    setCartItems(updatedCartItems);
  };
  return (
    <cartContext.Provider
      value={{ addAllProducts, products, cartItems, addToCart, removeFromCart }}
    >
      {children}
    </cartContext.Provider>
  );
}
export const useAppContext = () => useContext(cartContext);
