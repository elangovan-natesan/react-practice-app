import CartTable from "../components/cart/CartTable";
import { useSelector } from "react-redux";

export default function CartPage() {
  const carts = useSelector((reducer) => {
    return reducer.carts;
  });

  return (
    <div className="cartPage">
      {carts.length > 0 ? (
        <CartTable cartItems={carts} />
      ) : (
        <>
          <h3>Your Cart is Empty</h3>
        </>
      )}
    </div>
  );
}
