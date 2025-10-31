import React, { useEffect, useState } from "react";
import appliance from "../../assets/appliances.jpg";
import { useNavigate } from "react-router-dom";
import { getProducts, getProductById } from "../../api/productApi";

export default function Dashboard() {
  const navigate = useNavigate();
  const [products, setProducts] = useState();

  useEffect(() => {
    getProducts()
      .then((res) => setProducts(res.data))
      .catch((err) => console.error(err));
  }, []);

  const handleClick = (id) => {
    navigate(`/shop?id=${id}`);
  };

  return (
    <div className="container">
      <div className="row">
        {products?.categories?.map((category, index) => (
          <div class="col-lg-4 p-2" key={index} style={{ width: "18rem" }}>
            <div className="card">
              <img src={appliance} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">{category.name}</h5>
                <p class="card-text">{category.description}</p>
                <button
                  className="btn btn-primary"
                  onClick={() => handleClick(category.id)}
                >
                  Shop
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
