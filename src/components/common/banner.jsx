import React from "react";
import "./css/banner.css";
import Banner from "../../assets/banner.jpg";
// import Banner1 from "../../assets/banner-1.jpg";

export default function banner() {
  return (
    <>
      <div className="wrapper mb-5">
        <div className="banner d-flex justify-content-center">
          <a href="/">
            <img src={Banner} alt="" />
          </a>
          {/* <a href="">
            <img src={Banner1} alt="" />
          </a> */}
        </div>
        {/* <div className="infor-banner">
          <p>Gấu bông gửi trọn yêu thương</p>
          <p>Khám phá toàn bộ sưu tập đáng yêu của chúng tôi 
          và đưa về nhà một người bạn thân thiets cho riêng 
          bạn hoặc người thân yêu của bạn!</p>
          <button type="submit" className="btn">
            Mua ngay
          </button>
        </div> */}
      </div>
      <div className="container-fluid article d-flex justify-content-center p-0 mt-5">
        <div className="row p-0 m-0">
          <div className="col-12 col-sm-6 col-md-3 col-lg-3">
            <div className="card text-center" style={{ width: "20rem" }}>
              <i className="fa-solid fa-gear"></i>
              <div className="card-body">
                <h5 className="card-title">Bảo hành vĩnh viễn</h5>
                <p className="card-text">Gấu bông được bảo hành đường chỉ may vĩnh viễn</p>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-3 col-lg-3">
            <div className="card text-center" style={{ width: "20rem" }}>
              <i className="fa-solid fa-truck-fast"></i>
              <div className="card-body">
                <h5 className="card-title">Giao hàng toàn quốc</h5>
                <p className="card-text">Sản phẩm có thể vận chuyện và mua ở bất cứ tính nào bạn muốn</p>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-3 col-lg-3">
            <div className="card text-center" style={{ width: "20rem" }}>
              <i className="fa-solid fa-wind"></i>
              <div className="card-body">
                <h5 className="card-title">Giao hàng siêu tốc</h5>
                <p className="card-text">Gấu bông sẽ được giao siêu tốc 60p khu vực nội thành phố</p>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-3 col-lg-3">
            <div className="card text-center" style={{ width: "20rem" }}>
              <i className="fa-solid fa-headphones-simple"></i>
              <div className="card-body">
                <h5 className="card-title">Hỗ trợ khách hàng</h5>
                <p className="card-text">Những thắc mắc cần giải đáp liên hệ với tổng đài, luôn sẵn sàng hỗ trợ 24/7</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
