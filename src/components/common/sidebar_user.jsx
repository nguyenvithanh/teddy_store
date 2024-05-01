import React from "react";
import { NavLink } from "react-router-dom";
import "../common/css/nav.css";
// npm install react-icons --save
const Sidebar = ({ children }) => {
  const menuItem = [
    {
      path: "/teddy-store/infor",
      name: "Thông tin cá nhân",
      icon: <i class="fa-solid fa-note-sticky"></i>,
    },
    {
      path: "/teddy-store/order_status",
      name: "Đơn hàng của tôi",
      icon: <i class="fa-solid fa-box"></i>,
    },
    {
      path: "/teddy-store/changepass",
      name: "Đổi mật khẩu",
      icon: <i class="fa-solid fa-arrows-rotate"></i>,
    },
    {
      path: "/teddy-store/Logout",
      name: "Đăng xuất",
      icon: <i class="fa-solid fa-right-from-bracket"></i>,
    },
  ];
  return (
    <div className="container">
      <div className="sidebar">
        {menuItem.map((item, index) => (
          <NavLink
            to={item.path}
            key={index}
            className="text_brown d-flex text-decoration-none mb-4 fs-5 mt-5"
            activeclassName="active"
          >
            <div className="icon me-3">{item.icon}</div>
            <div className="link_text">{item.name}</div>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
