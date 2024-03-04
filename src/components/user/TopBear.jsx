import axios from "axios";
import React, { useEffect, useState } from "react";

export default function TopBear() {
  const [topBear, setTopBear] = useState([]);

  const loadTopBear = async () => {
    try {
      const dataProduct = await axios.get("http://localhost:7070/teddy-store/getAllProduct");
      setTopBear(dataProduct.data);
    } catch (error) {
      console.error("Error loading top bear:", error);
    }
  };

  useEffect(() => {
    loadTopBear();
    
  }, []);

  return (
    <>
      {topBear.map((product) => (
        <div key={product.id} className="p-2 my-2 col-12 col-sm-6 col-md-3 col-lg-3">
          <div className="product-card card text-center">
            <div className="image">
              <img src={`/img_pro/${product.img_url}`} alt="A of product" className="img-fluid" />
            </div>
            <div className="card-body">
              <h5 className="card-title">{product.name}</h5>
              <p className="card-text">{product.price} đ</p>
              <a href="/" className="btn mx-2 btn-primary">
                {/* {product.size} */}
              </a>
            </div>
            <div className="card-product-hover">
              <button type="submit" className="btn mx-2 btn-primary">
                <i className="fa-solid fa-bag-shopping"></i>a
              </button>
              <button type="submit" className="btn mx-2 btn-primary">
                <i className="fa-regular fa-eye"></i>v
              </button>
              <button type="submit" className="btn mx-2 btn-primary">
                <i className="fa-regular fa-heart"></i>c
              </button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
