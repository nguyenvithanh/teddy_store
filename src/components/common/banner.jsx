import React from "react";
import "./css/banner.css";
import Banner from "../../assets/banner.jpg";
import Banner1 from "../../assets/banner-1.jpg";
<<<<<<< HEAD
import Banner2 from "../../assets/banner.jpg";
// import Banner1 from "../../assets/banner-1.jpg";
=======
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
>>>>>>> 66f89ecc20d26249a896b2a6b94de0119fadb6d8

export default function banner() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <>
<<<<<<< HEAD
    <div className="container">
      <div classname="container  mb-5">
        <div id="demo" className="carousel slide " data-bs-ride="carousel">  
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#demo" data-bs-slide-to={0} className="active" />
            <button type="button" data-bs-target="#demo" data-bs-slide-to={1} />
            <button type="button" data-bs-target="#demo" data-bs-slide-to={2} />
          </div>    
          <div className="carousel-inner wrapper">
            <div className="carousel-item active banner"> 
              <img src={Banner} alt="Los Angeles" className="d-block" style={{width: '100%'}} />
            </div>
            <div className="carousel-item banner">
              <img src={Banner1} alt="Chicago" className="d-block" style={{width: '100%'}} />
            </div>
            <div className="carousel-item banner">
              <img src={Banner2} alt="New York" className="d-block" style={{width: '100%'}} />
            </div>
          </div> 
          <button className="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" />
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
            <span className="carousel-control-next-icon" />
          </button>
        </div> 
      </div>

      <div className=" container article d-flex justify-content-center p-0 mt-5">
=======
      <div className="wrapper p-0 mx-0 mb-1">
        <Slider {...settings} className="slide">
            <Link href="/"  className="m-0 p-0">
              <img src={Banner} alt="" className="img-fluid" />
            </Link>
            <Link href="/" className="m-0 p-0">
              <img src={Banner1} alt="" className="img-fluid"/>
            </Link>
        </Slider>
      </div>
      <div className="article d-flex justify-content-center p-0 mt-5">
>>>>>>> 66f89ecc20d26249a896b2a6b94de0119fadb6d8
        <div className="row p-0 m-0">
          <div className="col-12 col-sm-6 col-md-3 col-lg-3 mb-2">
            <div className="card text-center" >
              <i className="fa-solid fa-gear mt-2"></i>
              <div className="card-body">
                <h5 className="card-title">Bảo hành vĩnh viễn</h5>
<<<<<<< HEAD
                <p className="card-text">Gấu bông được bảo hành đường chỉ may <br /> vĩnh viễn</p>
=======
                <p className="card-text">
                  Gấu bông được bảo hành đường chỉ may vĩnh viễn
                </p>
>>>>>>> 66f89ecc20d26249a896b2a6b94de0119fadb6d8
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-3 col-lg-3 mb-2">
            <div className="card text-center" >
              <i className="fa-solid fa-truck-fast mt-2"></i>
              <div className="card-body">
                <h5 className="card-title">Giao hàng toàn quốc</h5>
<<<<<<< HEAD
                <p className="card-text">Sản phẩm có thể vận chuyện và mua ở bất cứ tỉnh thành nào bạn muốn</p>
=======
                <p className="card-text">
                  Sản phẩm có thể vận chuyện và mua ở bất cứ tính nào bạn muốn
                </p>
>>>>>>> 66f89ecc20d26249a896b2a6b94de0119fadb6d8
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-3 col-lg-3 mb-2">
            <div className="card text-center"  >
              <i className="fa-solid fa-wind mt-2"></i>
              <div className="card-body">
                <h5 className="card-title">Giao hàng siêu tốc</h5>
<<<<<<< HEAD
                <p className="card-text">Gấu bông sẽ được giao siêu tốc 60p khu vực nội <br /> thành phố</p>
=======
                <p className="card-text">
                  Gấu bông sẽ được giao siêu tốc 60p khu vực nội thành phố
                </p>
>>>>>>> 66f89ecc20d26249a896b2a6b94de0119fadb6d8
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-3 col-lg-3 mb-2">
            <div className="card text-center"  >
              <i className="fa-solid fa-headphones-simple mt-2"></i>
              <div className="card-body">
                <h5 className="card-title">Hỗ trợ khách hàng</h5>
                <p className="card-text">
                  Những thắc mắc cần giải đáp liên hệ với tổng đài, luôn sẵn
                  sàng hỗ trợ 24/7
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
