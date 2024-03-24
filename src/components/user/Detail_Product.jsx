import axios from "axios";
import React, { useState, useEffect } from "react";
import "../common/css/index-user.css";
import "../common/css/Detail_product.css";
import Navigation from "../common/nav.jsx";
import Footer from "../common/footer.jsx";
import TopBear from "./TopBear.jsx";
import { Link, useParams } from "react-router-dom";
import { UploadOutlined } from "@ant-design/icons";
import { Button, Upload } from "antd";

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
  const [fileList, setFileList] = useState([]);
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

  const handleChangee = (info) => {
    let newFileList = [...info.fileList];

    // 1. Limit the number of uploaded files
    // Only to show two recent uploaded files, and old ones will be replaced by the new
    newFileList = newFileList.slice(-2);

    // 2. Read from response and show file link
    newFileList = newFileList.map((file) => {
      if (file.response) {
        // Component will show file.url as link
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
  return (
    <>
      <div className="container-fluid p-0 m-0">
        <div className="container-fluid p-0 m-0">{<Navigation />}</div>
        <div className="container">
          {products.map((products) => (
            <div className="row ms-5 mt-3">
              <div key={products.id} className="col-6 col-lg-4">
                <img
                  src={`/img_pro/${products.img_url}`}
                  className="img-p"
                  alt=""
                />
                <div className="image-gallery">
                  <div className="images">
                    {imageUrls.map((imageUrl, index) => (
                      <img
                        key={index}
                        src={`/img_pro/${imageUrl.img_url}`}
                        alt=""
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
                <div className="color">
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
                <div className="color mt-3">
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
                      <div className="price_service">
                        <p>Gía: </p>
                        <h3>{ServicePro.priceSv.toLocaleString()} VND</h3>
                      </div>
                      <div className="notesv">
                        <p>Nội dung muốn thêu:</p>
                        <input
                          className="textt"
                          type="text"
                          placeholder=" Nội dung bạn muốn thêu"
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
              </div>
            </div>
          ))}
        </div>
        <div className="container mt-5">
          {/* <Tabs defaultActiveKey="1" centered>
            <Tabs.TabPane tab="Mô tả" key="1">
              <Describe_pro />
            </Tabs.TabPane>
            <Tabs.TabPane tab="Đánh giá" key="2">
              <Service_pro />
            </Tabs.TabPane>
            <Tabs.TabPane tab="Dịch vụ" key="3">
              <Rate />
            </Tabs.TabPane>
          </Tabs>
 */}
        </div>
        <div className="container p-0 my-5">
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
