import React from "react";
import "../common/css/nav.css";
import logoHeader from "../../assets/XINH_logohedear.png";
import { Link  } from "react-router-dom";

export default function nav() {
  const userProfile = JSON.parse(localStorage.getItem("userProfile"));
  
  return (
    <>
      <div className="container-fluid header">
        <div className="header-left mt-2 p-0">
          <a href="/">
            <img src={logoHeader} className="img-fluid w-25" alt="Logo" />
          </a>
        </div>
        <div></div>
        <div className="header-right d-flex align-items-center mt-2 p-0">
          <div className="search d-flex">
            <input
              type="text"
              className="form-control"
              placeholder="Tìm kiếm sản phẩm"
            />
            <button type="submit" className="btn button-search">
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
          </div>
          <div className="tool d-flex">
            <Link
              to={"/teddy-store/login"}
              type="submit"
              className="btn button-profile"
            >
              <i className="me-2 fa-regular fa-user"></i>
              <span>{userProfile ? userProfile.username : "Khách"}</span>
            </Link>
            <Link type="submit" className="btn button-favorite">
              <i className="fa-regular fa-heart"></i>
              <span>Yêu thích</span>
            </Link>
            <Link type="submit" className="btn button-cart">
              <i className="fa-solid fa-bag-shopping"></i>
              <span>Giỏ hàng</span>
            </Link>
          </div>
        </div>
      </div>
      <div className="menu py-2 container-fluid">
        <ul className="menu-wrapper">
          <li>
            <a className="menu-item" href="/">
              Trang chủ
            </a>
          </li>
          <li>
            <a className="menu-item" href="/">
              Vườn gấu
            </a>
          </li>
          <li>
            <a className="menu-item" href="/">
              Thú bông
            </a>
          </li>
          <li>
            <a className="menu-item" href="/">
              Gấu Teddy
            </a>
          </li>
          <li>
            <a className="menu-item" href="/">
              Gấu hoạt hình
            </a>
          </li>
          <li>
            <a className="menu-item" href="/">
              Bút cao cấp
            </a>
          </li>
          <li>
            <a className="menu-item" href="/">
              Khuyến mãi
            </a>
          </li>
          <li>
            <a className="menu-item" href="/">
              Dịch vụ
            </a>
          </li>
          <li>
            <a className="menu-item" href="/">
              Liên hệ
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}