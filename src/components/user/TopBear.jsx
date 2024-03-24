import axios from "axios";
import React, { useEffect, useState } from "react";
import "../common/css/topBear.css";
import { Link } from "react-router-dom";

export default function TopBear() {
  const [topBear, setTopBear] = useState([]);
  const [size, setSize] = useState({});
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedProductId, setSelectedProductId] = useState(null);

  const handleSizeClick = (productId, size) => {
    setSelectedProductId(productId);
    setSelectedSize(size);
  };
  
  const loadTopBear = async () => {
    try {
      const dataProduct = await axios.get(
        "http://localhost:7070/teddy-store/getAllProduct"
      );
      setTopBear(dataProduct.data);

      const sizesData = await Promise.all(
        dataProduct.data.map(async (product) => {
          const dataSize = await axios.get(
            `http://localhost:7070/teddy-store/getSizeBy/${product.id}`
          );
          return { productId: product.id, sizes: dataSize.data };
        })
      );

      const sizesByProductMap = {};
      sizesData.forEach((sizesObj) => {
        sizesByProductMap[sizesObj.productId] = sizesObj.sizes;
      });

      setSize(sizesByProductMap);
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
        <div
          key={product.id}
          className="p-2 my-2 col-12 col-sm-6 col-md-3 col-lg-3"
        >
          <div className="product-card card text-center">
            <div className="image">
              <img
                src={`/img_pro/${product.img_url}`}
                alt="A of product"
                className="img-fluid"
              />
              <div className="card-product-hover">
                <Link type="submit" className="btn mx-2 btn-primary">
                  <i className="fa-solid fa-bag-shopping"></i>
                </Link> 
                <Link type="submit" className="btn mx-2 btn-primary" to={`/teddy-store/detail_products/${product.id}`} >
                  <i className="fa-regular fa-eye"></i>
                </Link>
                <Link type="submit" className="btn mx-2 btn-primary">
                  <i className="fa-regular fa-heart"></i>
                </Link>
              </div>
            </div>
            <div className="card-body">
              <h5 className="card-title">{product.name}</h5>
              {size[product.id]?.map((size) => (
                <div key={size.id}>
                  {selectedProductId === product.id &&
                    selectedSize &&
                    selectedSize.id === size.id && (
                      <div className="price-product mb-2">
                        {size.price != null && (
                          <p className="card-text">
                            {size.price.toLocaleString("vi-VN", {
                              style: "currency",
                              currency: "VND",
                            })}
                          </p>
                        )}
                      </div>
                    )}
                </div>
              ))}
              <div className="row">
                {size[product.id]?.map((size) => (
                  <div
                    className="mx-1 col-12 col-sm-3 col-md-3 col-lg-3"
                    key={size.id}
                  >
                    <div className="size-product">
                      <div className="button">
                        <button
                          type="button"
                          className="btn mx-2 mb-2"
                          onClick={() => handleSizeClick(product.id, size)}
                        >
                          {size.size_no}
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
