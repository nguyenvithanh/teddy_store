import React, { useEffect, useState } from "react";
import axios from "axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

export default function ThuBong() {
  const [thuBong, setThuBong] = useState([]);
  const [size, setSize] = useState({});
  const [selectedSize, setSelectedSize] = useState({});
  const [selectedPrice, setSelectedPrice] = useState({});

  const handleSizeClick = (productId, size) => {
    setSelectedSize((prevSelectedSize) => ({
      ...prevSelectedSize,
      [productId]: size,
    }));
    setSelectedPrice((prevSelectedPrice) => ({
      ...prevSelectedPrice,
      [productId]: size.price,
    }));
  };

  const loadDataBear = async () => {
    try {
      const dataProduct = await axios.get(
        "http://localhost:7070/teddy-store/getAllProductWhere-Thu-Bong"
      );
      setThuBong(dataProduct.data);

      const sizesData = await Promise.all(
        dataProduct.data.map(async (product) => {
          const dataSize = await axios.get(
            `http://localhost:7070/teddy-store/getSizeBy/${product.id}`
          );
          return { productId: product.id, sizes: dataSize.data };
        })
      );

      const sizesByProductMap = {};
      const initialPrices = {};
      sizesData.forEach((sizesObj) => {
        sizesByProductMap[sizesObj.productId] = sizesObj.sizes;
        const firstSize = sizesObj.sizes[0];
        if (firstSize) {
          initialPrices[sizesObj.productId] = firstSize.price;
          setSelectedSize((prevSelectedSize) => ({
            ...prevSelectedSize,
            [sizesObj.productId]: firstSize,
          }));
          setSelectedPrice((prevSelectedPrice) => ({
            ...prevSelectedPrice,
            [sizesObj.productId]: firstSize.price,
          }));
        }
      });
      setSize(sizesByProductMap);
    } catch (error) {
      console.error("Error loading bear:", error);
    }
  };

  useEffect(() => {
    loadDataBear();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,
  };

  return (
    <>
      <Slider {...settings}>
        {thuBong.map((product) => (
          <div key={product.id}>
            <div className="mx-3 product-card card text-center">
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
                  <Link
                    type="submit"
                    className="btn mx-2 btn-primary"
                    to={`/teddy-store/detail_products/${product.id}`}
                  >
                    <i className="fa-regular fa-eye"></i>
                  </Link>
                  <Link type="submit" className="btn mx-2 btn-primary">
                    <i className="fa-regular fa-heart"></i>
                  </Link>
                </div>
              </div>
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                {size[product.id]?.map((sizeItem) => (
                  <div key={sizeItem.id}>
                    {selectedSize[product.id] &&
                      selectedSize[product.id].id === sizeItem.id && (
                        <div className="price-product mb-2">
                          {selectedPrice[product.id] != null && (
                            <p className="card-text">
                              {selectedPrice[product.id].toLocaleString(
                                "vi-VN",
                                {
                                  style: "currency",
                                  currency: "VND",
                                }
                              )}
                            </p>
                          )}
                        </div>
                      )}
                  </div>
                ))}
                <div className="row">
                  {size[product.id]?.map((sizeItem) => (
                    <div
                      className="mx-1 col-12 col-sm-3 col-md-3 col-lg-3"
                      key={sizeItem.id}
                    >
                      <div className="size-product">
                        <div className="button">
                          <button
                            type="button"
                            className={`btn mx-2 mb-2 ${
                              selectedSize[product.id] &&
                              selectedSize[product.id].id === sizeItem.id
                                ? "selected"
                                : ""
                            }`}
                            onClick={() =>
                              handleSizeClick(product.id, sizeItem)
                            }
                          >
                            {sizeItem.size_no}
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
      </Slider>
    </>
  );
}
