import React from "react";
import "../common/css/index-user.css";
import "../common/css/Detail_product.css";
import Navigation from "../common/nav.jsx";
import Footer from "../common/footer.jsx";
import Product from "../../assets/teddy_xoan.jpg"; 
import { Tabs } from 'antd';
export default function detail_product() {

  return (
    <>
      <div className="container-fluid p-0 m-0">
        <div className="container-fluid p-0 m-0">{<Navigation />}</div>
        <div className="container">
          <div className="row ms-5">
            <div className="col-4  ">
              <img src={Product} alt="" className="img-p" />

              <img src={`/img_pro/teddy_xoan.jpg`} className="img-thumbnail me-2" alt="Image 1" />


              <img src={`/img_pro/teddy_xoan1.jpg`} className="img-thumbnail me-2" alt="Image 2" />

              <img src={`/img_pro/teddy_xoan.jpg`} className="img-thumbnail me-2" alt="Image 3" />

            </div>
            <div className="col-8 content_pro">
              <h4>Gấu Teddy lông xoăn</h4>
              <div className="star">
                <i class="bi bi-star-fill "></i>
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
                <p>|</p>
                <h6>7 Đánh giá</h6>
                <p>|</p>
                <h6>7 Đã bán</h6>
              </div>
              <div className="price">
                <p>140.000 VND</p>
                <h3>120.000 VND</h3>
              </div>
              <div className="color">
                <p>Màu sắc:</p>
                <div>
                  <button>Màu hồng</button>
                  <button>Màu vàng</button>
                  <button>Màu xanh</button>
                </div>
              </div>
              <div className="note">
                <p>Ghi chú: </p>
                <input placeholder=" Yêu cầu thêm...."></input>
              </div>
              <div className="quantity">
                <p>Số lượng: </p>
                <div className="input-group">
                  <button className="btn btn-outline-secondary" >-</button>
                  <input type="number" name="quantity" className="form-control ps-4" min="0" value="1" />
                  <button className="btn btn-outline-secondary" >+</button>
                </div>
                <p >10 sản phẩm có sản</p>
              </div>
              <div>
                <hr />
              </div>
              <div className="service">
                <p>Dịch vụ:</p>
                <button>Thêu chữ, logo lên áo</button>
              </div>
              <div className="price_service">
                <p>Gía: </p>
                <h3>100.000 VND</h3>
              </div>
              <div className="notesv">
                <p>Nội dung muốn thêu:</p>
                <input className="text" type="text" />
                <div>
                  <p><hr /></p>
                  <p>Hoặc</p>
                  <p><hr /></p>
                </div>
                <p>Tải thết kế của bạn</p>
                <input type="file" name="" id="" />
                <div className="cart">
                  <button> <i class="bi bi-plus-square"></i>Thêm vào giỏ hàng </button>
                  <button>Mua ngay</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container mt-5">
        <Tabs
    defaultActiveKey="1"
    centered
    items={new Array(3).fill(null).map((_, i) => {
      const id = String(i + 1);
      return {
        label: `Tab ${id}`,
        key: id,
        children: `Content of Tab Pane ${id}`,
      };
    })}
  />
       


         </div>
        <div className="container-fluid p-0 m-0">{<Footer />}</div>
      </div>
    </>

  );
}

