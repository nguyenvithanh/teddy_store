import React from "react";
import "./css/footer.css";
import logoFooter from "../../assets/xinh_logo.png";

export default function footer() {
  return (
    <>
      <div className="footer container-fluid "> 
          <div class="row ">
            <div class="col-md-3 pe-5 ms-3"> 
                  <img src={logoFooter} className="img-fluid " alt="" />
                  <p className="">
                    <i className="fa-solid fa-phone me-3"></i> 0993930394
                  </p> 
                  <p>
                    <i className="fa-regular fa-envelope me-3"></i>gaubongxinh@gmail.com
                  </p> 
                  <p>
                    <i className="fa-solid fa-location-pin me-3"></i>93 Nguyễn Văn Nghi, phường 7, quận Gò Vấp
                  </p> 
            </div>
            <div class="col-md-3 ms-3"> 
                <h5 className="my-3">Thông tin</h5> 
                <p>Chính sách bảo mật hệ thống</p> 
                <p>Chính sách bán sỉ</p> 
                <p>Bảo hành và đổi trả</p> 
                <p>Cách đặt hàng</p> 
                <p>Giới thiệu và liên hệ</p> 
            </div>
            <div class="col-md-2  ms-3"> 
                <h5 className="my-3">Liên kết tài khoản</h5>  
                <p>Giỏ hàng</p> 
                <p>Tài khoản</p> 
                <p>Sản phẩm mới</p>  
            </div>
            <div class="col-md-3 ms-3 ">
            <h5 className="my-3">Dịch vụ giao hàng</h5> 
                <p>Đơn vị vận chuyển: Ahamove, GHN, GHTK.</p> 
                <p>Nội thành: 60 - 90 phút</p> 
                <p>Ngoại thành: 2 -4 ngày</p> 
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
