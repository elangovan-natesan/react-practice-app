import { formatSpecs } from "../../utils/formatproduct";
import { useAppContext } from "../../context/AppContext";
import Button from "../button/Button";
import appliance from "../../assets/appliances.jpg";
import { useDispatch } from "react-redux";
import { addItem } from "../../redux-toolkit/store/cartSlice";

export default function ProductCard({ product }) {
  // const { addToCart } = useAppContext();
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    // addToCart(product);
    dispatch(addItem(product));
  };

  return (
    <div className="col-sm-6 col-md-4 col-lg-3 col-xl-2">
      <div className="card h-100">
        <img
          className="card-img-top"
          src={appliance}
          alt={product.name || "product-image"}
        />
        <div className="card-body  d-flex flex-column">
          <div className="card-title">{product.name}</div>
          <p className="card-text">{product.brand}</p>
          {product.specs &&
            formatSpecs(product.specs).map(([key, value]) => {
              return (
                <p className="card-text">
                  {key} - {value}
                </p>
              );
            })}
          {product.expiry && (
            <p className="card-text">Expiry :{product.expiry}</p>
          )}
          <p className="card-text">
            {product.price} - {product.currency}
          </p>
          <p className="card-text flex-grow-1">
            In Stock : {product.inStock ? "yes" : "No"}
          </p>
          <i className="d-block">Rating : {product.rating}</i>
          <Button label="Add to Cart" handleClick={handleAddToCart} />
        </div>
      </div>
    </div>
  );
}
