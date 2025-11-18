import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function NavBar() {
  const carts = useSelector((reducer) => {
    // return reducer.carts;
    let cartItems = 0;

    for (const cart of reducer.carts) {
      cartItems += cart.quantity;
    }

    return cartItems;
  });

  return (
    <div>
      <ul className="nav">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">
            Dashboard
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/shop">
            Shop
          </Link>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Inventory
          </a>
        </li>
        <li className="nav-item ms-auto">
          <Link className="nav-link" to="/cart">
            <i className="bi bi-bag-check "></i>
            <span className="top-0 start-100 translate-middle badge p-1 rounded-pill bg-danger badge">
              {/* {carts ? carts.length : 0} */}
              {carts > 0 ? carts : 0}
            </span>
          </Link>
        </li>
      </ul>
    </div>
  );
}
