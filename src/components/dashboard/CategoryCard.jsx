import { useNavigate } from "react-router-dom";
import appliance from "../../assets/appliances.jpg";

export default function CategoryCard({ category }) {
  const navigate = useNavigate();

  const handleClick = (id) => {
    navigate(`/products/${id}`);
  };
  return (
    <div className="col-sm-6 col-md-4 col-lg-3 col-xl-2">
      <div className="card h-100">
        <img src={appliance} className="card-img-top" alt="..." />
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">{category.name}</h5>
          <p className="card-text flex-grow-1">{category.description}</p>
          <button
            className="btn btn-primary"
            onClick={() => handleClick(category.id)}
          >
            Shop
          </button>
        </div>
      </div>
    </div>
  );
}
