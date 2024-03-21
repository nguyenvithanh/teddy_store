import React from "react";
import "./css/footer.css";
import logoFooter from "../../assets/xinh_logo.png";

export default function footer() {
  return (
    <>
     
      <div className="footer container-fluid p-0 m-0">
        <div className="container-fluid shadow-sm">
          <div className="container py-3 d-flex">
            <div className="letter w-50 d-flex">
              <i className="fa-regular fa-envelope me-3"></i>
              <div className="line">
                <h6 className="title">Theo dõi bản tin của chúng tôi</h6>
                <span className="content">
                  Nhận tất cả các thông tin mới nhất về Sự kiện, Bán hàng và Ưu
                  đãi qua Email.
                </span>
              </div>
            </div>
            <div className="input w-50 d-flex">
              <div className="mb-3 w-75">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Vui lòng nhập email của bạn...."
                />
              </div>
              <div className="mb-3 w-25">
                <button className="btn">Đăng ký</button>
              </div>
            </div>
          </div>
        </div>
        <div className="row text-center p-0 m-0">
          <div className="col-12 col-sm-6 col-md-3 col-lg-3">
            <ul className="wrapper">
              <li>
                <img src={logoFooter} className="img-fluid w-75" alt="" />
              </li>
              <li>
                <p>
                  <i className="fa-solid fa-phone me-3"></i> 0993930394
                </p>
              </li>
              <li>
                <p>
                  <i className="fa-regular fa-envelope me-3"></i>
                  gaubongxinh@gmail.com
                </p>
              </li>
              <li>
                <p>
                  <i className="fa-solid fa-location-pin me-3"></i>93 Nguyễn Văn
                  Nghi, phường 7, quận Gò Vấp
                </p>
              </li>
            </ul>
          </div>
          <div className="col-12 col-sm-6 col-md-3 col-lg-3">
            <ul className="wrapper">
              <li>
                <h5>Thông tin</h5>
              </li>
              <li>
                <p>Chính sách bảo mật hệ thống</p>
              </li>
              <li>
                <p>Chính sách bán sỉ</p>
              </li>
              <li>
                <p>Bảo hành và đổi trả</p>
              </li>
              <li>
                <p>Cách đặt hàng</p>
              </li>
              <li>
                <p>Giới thiệu và liên hệ</p>
              </li>
            </ul>
          </div>
          <div className="col-12 col-sm-6 col-md-3 col-lg-3">
            <ul className="wrapper">
              <li>
                <h5>Liên kết tài khoản</h5>
              </li>
              <li>
                <p>Giỏ hàng</p>
              </li>
              <li>
                <p>Tài khoản</p>
              </li>
              <li>
                <p>Sản phẩm mới</p>
              </li>
              <li>
                <h5 className="my-3">Dịch vụ giao hàng</h5>
              </li>
              <li>
                <p>Đơn vị vận chuyển: Ahamove, GHN, GHTK.</p>
              </li>
              <li>
                <p>Nội thành: 60 - 90 phút</p>
              </li>
              <li>
                <p>Ngoại thành: 2 -4 ngày</p>
              </li>
            </ul>
          </div>
          <div className="col-12 col-sm-6 col-md-3 col-lg-3">
            <ul className="wrapper">
              <li>
                <h5>Fanpage</h5>
              </li>
              <li>
                <img src="" alt="Ảnh fanpage" />
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-under d-flex justify-content-around">
          <div className="footer-left">
            <p>@ 2023 Copyright Gaubongxinh.vn</p>
          </div>
          <div></div>
          <div className="footer-right">
            <li>
              <i className="fa-brands fa-twitter"></i>
            </li>
            <li>
              <i className="fa-brands fa-facebook"></i>
            </li>
            <li>
              <i className="fa-brands fa-youtube"></i>
            </li>
            <li>
              <i className="fa-regular fa-envelope"></i>
            </li>
          </div>
        </div>
      </div>
    </>
  );
}
