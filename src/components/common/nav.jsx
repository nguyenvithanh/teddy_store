import React from "react";
import "../common/css/nav.css";
import logoHeader from "../../assets/XINH_logohedear.png";
import Logout from "../Logout";
import { Link } from "react-router-dom";

export default function Nav() {
  const userProfile = JSON.parse(localStorage.getItem("userProfile"));
  const cartQuantity = parseInt(localStorage.getItem("cartQuantity"), 10) || 0;

  return (
    <>
      <div className="container-fluid header">
        <div className="header-left mt-2 p-0">
          <Link to={"/teddy-store/homePage"}>
            <img src={logoHeader} className="img-fluid w-25" alt="Logo" />
          </Link>
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
            <div className="dropdown">
              {userProfile && userProfile.username ? (
                <>
                  <Link
                    className="btn button-profile dropdown-toggle"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i className="me-2 fa-regular fa-user"></i>
                    <span>{userProfile.username}</span>
                  </Link>
                  <ul className="dropdown-menu">
                    <li>{<Logout />}</li>
                  </ul>
                </>
              ) : (
                <>
                  <Link
                    className="btn button-profile dropdown-toggle"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i className="me-2 fa-regular fa-user"></i>
                    <span>Chưa đăng nhập</span>
                  </Link>
                  <ul className="dropdown-menu">
                    <li>
                      <Link to={"/teddy-store/login"} className="dropdown-item">
                        Đăng nhập
                      </Link>
                    </li>
                  </ul>
                </>
              )}
            </div>
            <Link type="submit" className="btn button-favorite">
              <i className="fa-regular fa-heart"></i>
              <span>Yêu thích</span>
            </Link>
            <Link
              to={"/teddy-store/cart"}
              type="submit"
              className="btn button-cart"
            >
              <i className="fa-solid fa-bag-shopping"></i>
              <span>Giỏ hàng ({cartQuantity})</span>
            </Link>
          </div>
        </div>
      </div>
      <div className="menu py-2 container-fluid">
        <ul className="menu-wrapper">
          <li>
            <Link to={"/teddy-store/homePage"} className="menu-item">
              Trang chủ
            </Link>
          </li>
          <li>
            <Link className="menu-item">Vườn gấu</Link>
          </li>
          <li>
            <Link className="menu-item">Thú bông</Link>
          </li>
          <li>
            <Link className="menu-item">Gấu Teddy</Link>
          </li>
          <li>
            <Link className="menu-item">Gấu hoạt hình</Link>
          </li>
          <li>
            <Link className="menu-item">Bút cao cấp</Link>
          </li>
          <li>
            <Link className="menu-item">Khuyến mãi</Link>
          </li>
          <li>
            <Link className="menu-item">Dịch vụ</Link>
          </li>
          <li>
            <Link className="menu-item">Liên hệ</Link>
          </li>
        </ul>
      </div>
    </>
  );
}
