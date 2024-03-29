import axios from "axios";
import React, { useState, useEffect } from "react";
import "./css/index-user.css";
import "./css/Detail_product.css";
import Navigation from "../common/nav.jsx";
import Footer from "../common/footer.jsx";
import TopBear from "./TopBear.jsx";
import Describepro from "../user/Describe_Pro.jsx";
import Servicepro from "../user/Service_pro.jsx";
import Rate from "../user/Rate.jsx";
import { Link, useParams } from "react-router-dom";
import { UploadOutlined } from "@ant-design/icons";
import { Button, Upload, Tabs } from "antd";

export default function Detail_product() {
  const { id } = useParams();
  const [products, setProductDetail] = useState([]);
  const [ratePro, setRatePro] = useState([]);
  const [imageUrls, setImageUrls] = useState([]);
  const [color, setColor] = useState([]);
  const [size, setSize] = useState({});
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedPrice, setSelectedPrice] = useState(null);
  const [selectedPricesale, setselectedPricesale] = useState(null);
  const [selectedProductId, setSelectedProductId] = useState(null);
  const [ServicePro, setServicePro] = useState([]);
  const [selectedColor, setSelectedColor] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [quantityy, setQuantityy] = useState(0);
  const [fileList, setFileList] = useState([]);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  useEffect(() => {
    const fetchProductDetail = async () => {
      try {
        const dataProduct = await axios.get(
          `http://localhost:7070/teddy-store/getProductDetailID/${id}`
        );
        setProductDetail(dataProduct.data);
        const RatePro = await axios.get(
          `http://localhost:7070/teddy-store/getRatePro/${id}`
        );
        setRatePro(RatePro.data);
        console.log(RatePro);
        const ImgPro = await axios.get(
          `http://localhost:7070/teddy-store/getImgPro/${id}`
        );
        setImageUrls(ImgPro.data);
        const ColorPro = await axios.get(
          `http://localhost:7070/teddy-store/getColorPro/${id}`
        );
        setColor(ColorPro.data);
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
        const ServicePro = await axios.get(
          `http://localhost:7070/teddy-store/getProService/${id}`
        );
        setServicePro(ServicePro.data);
      } catch (error) {
        console.error("Error fetching product detail:", error);
      }
    };

    fetchProductDetail();
  }, [id]);

  // Chọn size đầu tiên và hiển thị giá tương ứng
  useEffect(() => {
    if (products.length > 0 && size[products[0].id]?.length > 0) {
      const firstSize = size[products[0].id][0];
      setSelectedSize(firstSize);
      setSelectedPrice(firstSize.price);
      setselectedPricesale(firstSize.price_sale);
      setSelectedProductId(products[0].id);
    }
  }, [products, size]);

  const handleSizeClick = (productId, selectedSize) => {
    setSelectedProductId(productId);
    setSelectedSize(selectedSize);
    setSelectedPrice(selectedSize.price);
    setselectedPricesale(selectedSize.price_sale);
  };
  const handleColorClick = (color) => {
    setSelectedColor(color);
  };

  const handleChange = (event) => {
    const newQuantity = parseInt(event.target.value);
    if (
      !isNaN(newQuantity) &&
      newQuantity >= 1 &&
      newQuantity <= (selectedSize ? selectedSize.quantity : Infinity)
    ) {
      setQuantity(newQuantity);
    }
  };
  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const increaseQuantity = () => {
    if (selectedSize && quantity < selectedSize.quantity) {
      setQuantity(quantity + 1);
    }
  };
  const handleChangeee = (event) => {
    const newQuantity = parseInt(event.target.value);
    if (!isNaN(newQuantity) && newQuantity >= 0 && newQuantity <= 2) {
      setQuantityy(newQuantity);
    }
  };
  const decreaseQuantityy = () => {
    if (quantityy > 0) {
      setQuantityy(quantityy - 1);
    }
  };

  const increaseQuantityy = () => {
    if (quantityy < 2) {
      setQuantityy(quantityy + 1);
    }
  };

  const handleChangee = (info) => {
    let newFileList = [...info.fileList];
    newFileList = newFileList.slice(-2);
    newFileList = newFileList.map((file) => {
      if (file.response) {
        file.url = file.response.url;
      }
      return file;
    });
    setFileList(newFileList);
  };
  const props = {
    action: "",
    onChange: handleChangee,
    multiple: true,
  };
  const handleThumbnailClick = (index) => {
    setSelectedImageIndex(index);
  };

  return (
    <>
      <div className="container-fluid p-0 m-0">
        <div className="container-fluid p-0 m-0">{<Navigation />}</div>
        <div className="container">
          {products.map((products) => (
            <div className="row ms-5 mt-3">
              <div className="col-6 col-lg-4">
                {imageUrls.length > 0 && (
                  <img
                    src={`/img_pro/${imageUrls[selectedImageIndex].img_url}`}
                    className="img-p"
                    alt=""
                  />
                )}
                <div className="image-gallery">
                  <div className="images">
                    {imageUrls.map((imageUrl, index) => (
                      <img
                        key={index}
                        src={`/img_pro/${imageUrl.img_url}`}
                        alt=""
                        onClick={() => handleThumbnailClick(index)}
                      />
                    ))}
                  </div>
                </div>
              </div>

              <div className="col-6 col-lg-8 content_pro">
                <h4>{products.name}</h4>
                {ratePro.length > 0 ? (
                  ratePro.map((ratePros) => (
                    <div className="star">
                      {[...Array(5)].map((_, index) => (
                        <i
                          key={index}
                          className={`bi bi-star${
                            index < ratePros.star_no ? "-fill" : ""
                          }`}
                        ></i>
                      ))}
                      <p>|</p>
                      <h6>{ratePros.number_rate} Đánh giá</h6>
                      <p>|</p>
                      <h6>{ratePros.quantity} Đã bán</h6>
                    </div>
                  ))
                ) : (
                  <div className="star">
                    {[...Array(5)].map((_, index) => (
                      <i key={index} className="bi bi-star"></i>
                    ))}
                    <p>|</p>
                    <h6>0 Đánh giá</h6>
                    <p>|</p>
                    <h6>0 Đã bán</h6>
                  </div>
                )}

                <div className="price">
                  {selectedPricesale != null && (
                    <p>
                      {selectedPricesale.toLocaleString("vi-VN", {
                        style: "currency",
                        currency: "VND",
                      })}
                    </p>
                  )}
                  {selectedPrice != null && (
                    <h3>
                      {selectedPrice.toLocaleString("vi-VN", {
                        style: "currency",
                        currency: "VND",
                      })}
                    </h3>
                  )}
                </div>
                <div className=" color">
                  <div className="colorr">
                    <p className="p mt-4">Màu sắc:</p>
                  </div>
                  {color.map((color) => (
                    <div key={color.id}>
                      <button
                        type="submit"
                        className={`buttonn ${
                          selectedColor === color ? "selected" : ""
                        }`}
                        onClick={() => handleColorClick(color)}
                      >
                        {color.color}
                      </button>
                    </div>
                  ))}
                </div>
                {/* Size */}

                <div className="color mt-3 ">
                  <div className="size">
                    <p className="s">Size</p>
                  </div>
                  {size[products.id]?.map((size) => (
                    <div key={size.id}>
                      <button
                        className={`buttonn ${
                          selectedSize === size ? "selected" : ""
                        }`}
                        onClick={() => handleSizeClick(products.id, size)}
                      >
                        {size.size_no}
                      </button>
                    </div>
                  ))}
                </div>

                <div className="note">
                  <p>Ghi chú: </p>
                  <input
                    className="texttt"
                    placeholder=" Yêu cầu thêm...."
                  ></input>
                </div>
                <div className="quantity">
                  <p className="p">Số lượng: </p>
                  <div className="input-group">
                    <button
                      className="btn btn-outline-secondary pe-3"
                      type="button"
                      onClick={decreaseQuantity}
                    >
                      -
                    </button>
                    <input
                      type="number"
                      className="form-control ps-4"
                      value={quantity}
                      onChange={handleChange}
                    />
                    <button
                      className="btn btn-outline-secondary"
                      type="button"
                      onClick={increaseQuantity}
                    >
                      +
                    </button>
                  </div>
                  {size[products.id]?.map((size) => (
                    <div key={size.id}>
                      {selectedProductId === products.id &&
                        selectedSize &&
                        selectedSize.id === size.id && (
                          <div>
                            {size.quantity != null && (
                              <p className="p">
                                {size.quantity} sản phẩm có sẳn
                              </p>
                            )}
                          </div>
                        )}
                    </div>
                  ))}
                </div>
                <div>
                  <hr />
                </div>
                {ServicePro.length > 0 ? (
                  ServicePro.map((ServicePro, index) => (
                    <div key={index} className="service">
                      <p>Dịch vụ:</p>
                      <button>{ServicePro.name}</button>
                      <div className="quantity">
                        <p className="p">Số lượng: </p>
                        <div className="input-group">
                          <button
                            className="btn btn-outline-secondary pe-3"
                            type="button"
                            onClick={decreaseQuantityy}
                          >
                            -
                          </button>
                          <input
                            type="number"
                            className="form-control ps-4"
                            value={quantityy}
                            onChange={handleChangeee}
                          />
                          <button
                            className="btn btn-outline-secondary"
                            type="button"
                            onClick={increaseQuantityy}
                          >
                            +
                          </button>
                        </div>
                      </div>
                      <div className="price_service">
                        <p>Gía: </p>
                        <h3>
                          {(quantityy * ServicePro.priceSv).toLocaleString()}{" "}
                          VND
                        </h3>
                      </div>
                      <div className="notesv">
                        <p>Nội dung muốn thêu:</p>
                        <input
                          className="textt"
                          type="text"
                          placeholder=" VD:
Mặt trước: Nội dung 1, màu ...
Mặt sau: Nội dung 2, màu ..."
                        />
                        <div>
                          <p>
                            <hr />
                          </p>
                          <p>Hoặc</p>
                          <p>
                            <hr />
                          </p>
                        </div>
                        <p>Tải thết kế của bạn</p>
                        <Upload {...props} fileList={fileList}>
                          <Button icon={<UploadOutlined />}>Upload</Button>
                        </Upload>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="no-service">
                    Không có dịch vụ nào được tìm thấy.
                  </div>
                )}
                <div className="cartt">
                  <div className="cart">
                    <button>
                      {" "}
                      <i className="bi bi-plus-square pe-2"></i>Thêm vào giỏ
                      hàng{" "}
                    </button>
                    <button>Mua ngay</button>
                  </div>
                </div>
                <h5 className="mt-3 ">Chat với chúng tôi để đc tư vấn</h5>
                <div className="connectt">
                  <div className="connect me-3">
                    <a
                      href="https://www.facebook.com/gaubongdepsaigon"
                      className="facebook-icon"
                    >
                      <i className="fab fa-facebook me-2 ms-2"></i>
                    </a>{" "}
                    Chat Facebook
                  </div>
                  <div className="connect">
                    <a href="https://chat.zalo.me/" className="zalo-icon">
                      <i className="fab fa-facebook me-2 ms-2"></i>
                    </a>
                    Chat Zalo
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="container mt-4">
          <Tabs defaultActiveKey="1" centered>
            <Tabs.TabPane tab="Mô tả" key="1">
              <Describepro />
            </Tabs.TabPane>
            <Tabs.TabPane tab="Đánh giá" key="2">
              <Rate />
            </Tabs.TabPane>
            <Tabs.TabPane tab="Dịch vụ" key="3">
              <Servicepro />
            </Tabs.TabPane>
          </Tabs>
        </div>
        <div className="container p-0 my-3">
          <div className="title-topbear">
            <div className="title text-center">
              <h3 className="">Top gấu bán chạy</h3>
            </div>
            <div className="learn-more text-end">
              <Link className="text-decoration-none">
                <span>Xem thêm</span>
                <i className="mx-1 fa-solid fa-angles-right"></i>
              </Link>
            </div>
          </div>
          <div className="product-topbear">
            <div className="row">
              <TopBear />
            </div>
          </div>
        </div>
        <div className="container-fluid p-0 m-0">{<Footer />}</div>
      </div>
    </>
  );
}
