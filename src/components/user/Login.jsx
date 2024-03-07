import React, { useEffect, useState } from "react";
import Nav from "../common/nav";
import Footer from "../common/footer";
import "../common/css/login.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

export default function Login() {
  const navigate = useNavigate();
  const [user, setUser] = useState([]);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [userProfile, setUserProfile] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:7070/teddy-store/login",
        {
          username,
          password,
        }
      );

      const userData = response.data; // Thông tin người dùng từ API

      localStorage.setItem("userProfile", JSON.stringify(userData));

      // Hiển thị SweetAlert và chuyển hướng sau 2 giây
      Swal.fire({
        icon: "success",
        title: "Đăng nhập thành công!",
        showConfirmButton: false,
        timer: 1500,
      });

      setTimeout(() => {
        navigate("/", { state: { userProfile } });
      }, 2000);
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Đăng nhập thất bại",
        text: "Tên đăng nhập hoặc mật khẩu không đúng",
      });
    }
  };

  const render = async () => {
    const listUser = await axios.get(
      "http://localhost:7070/teddy-store/getAllAccount"
    );
    setUser(listUser.data);
  };
  useEffect(() => {
    render();
  });
  return (
    <>
      <div className="container-fluid p-0 m-0">{<Nav />}</div>
      <div className="wrapper-form container w-50 my-5">
        <form>
          <h3 className="text-center my-5">Đăng nhập</h3>
          <div className="mb-4">
            <label className="form-label">Tên đăng nhập</label>
            <input
              type="username"
              id="username"
              className="form-control"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="form-label">Mật khẩu</label>
            <input
              type="password"
              id="password"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <div className="text-end">
              <Link href="/" className="forgot-pass">
                Quên mật khẩu?
              </Link>
            </div>
          </div>
          <div className="mb-4 text-center">
            <button
              type="submit"
              className="btn btn-submit mb-1"
              onClick={handleSubmit}
            >
              Đăng nhập
            </button>
          </div>
        </form>
        <div className="button-login text-center">
          <div className="mb-3">
            <span className="line-login"></span>
            <span>Đăng nhập với</span>
            <span className="line-login"></span>
          </div>
          <button type="button" className="btn btn-face mx-1 mb-3">
            <i
              className="fa-brands fa-facebook"
              style={{ color: "#064a7f" }}
            ></i>
          </button>
          <button type="button" className="btn btn-email mx-1 mb-3">
            <i className="fa-solid fa-envelope"></i>
          </button>
          <p>
            Bạn chưa có tài khoản?{" "}
            <Link href="/" className="register">
              Đăng ký
            </Link>
          </p>
        </div>
      </div>
      <div className="container-fluid p-0 m-0">{<Footer />}</div>
    </>
  );
}
