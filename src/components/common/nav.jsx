import React from "react";
import "../common/css/nav.css";
<<<<<<< HEAD
import logoHeader from "../../assets/XINH_logohedear.png"; 

export default function nav() {
  // const labels = ["Trang chủ", "Vườn thú", "Thú bông", "Gấu Teddy", "Gấu hoạt hình", "Bút cao cấp", "Khuyến mãi", "Dịch vụ", "Liên hệ"];

// const items = new Array(9).fill(null).map((_, index) => ({
//     key: index + 1,
//     label: labels[index % labels.length], // Sử dụng phép chia lấy dư để lặp lại các nhãn nếu số lượng nhãn ít hơn số lượng phần tử
// }));
// const {
//   token: { colorBgContainer, borderRadiusLG },
// } = theme.useToken();
  return (
    <>
      {/* <Layout>
      <Header className="header"
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 1,
          width: '100%',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <div className="demo-logo" >
          <a href="/" className=" ">
              <img src={logoHeader} className="img-fluid " alt="Logo" />
            </a>

        </div>
        <Menu 
    mode="horizontal"
    defaultSelectedKeys={['2']}
    items={items}
    style={{
        flex: 1,
        minWidth: 0,
        backgroundColor: '#fff', // Thay đổi màu nền của Menu
    }}
    className="custom-menu"
/>


      </Header>
      <Content
        style={{
          padding: '0 48px',
        }}
      >
        
        <div
          style={{
            padding: 24,
            minHeight: 380,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          Content
        </div>
      </Content>
      <Footer
        style={{
          textAlign: 'center',
        }}
      >
        Ant Design ©{new Date().getFullYear()} Created by Ant UED
      </Footer>
    </Layout> */}
      <nav className=" navbar  navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid header ">
          <div className="col-6  navbar-brand">
            <a href="/" className=" ">
              <img src={logoHeader} className="img-fluid " alt="Logo" />
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
              <span className="bi bi-list" />
            </button>
          </div>
          <div className=" col-6  " class="collapse navbar-collapse" id="navbarNavDropdown" >
            <ul class="navbar-nav header-right d-flex align-items-center">
              <div className="search d-flex  nav-item">
                <input type="text" className="form-control" placeholder="Tìm kiếm sản phẩm" />
                <button type="submit" className="btn button-search">
                  <i className="fa-solid fa-magnifying-glass fs-5"></i>
                </button>
              </div>
              <div className="tool d-flex nav-item">
                <button type="submit" className="btn button-profile">
                  <i className="fa-regular fa-user"></i>
                </button>
                <button type="submit" className="btn button-favorite">
                  <i className="fa-regular fa-heart"></i>
                </button>
                <button type="submit" className="btn button-cart">
                  <i className="fa-solid fa-bag-shopping"></i>
                </button>
              </div>
            </ul>
          </div>
        </div>
      </nav>
      <div className="menu container">
        <div className="row">
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
=======
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
>>>>>>> 66f89ecc20d26249a896b2a6b94de0119fadb6d8
      </div>
    </>
  );
}
