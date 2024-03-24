import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import Nav from "./common/nav";
import Footer from "./common/footer";
import "../components/common/css/login.css";
import LoginFaceBook from "./LoginFaceBook";

export default function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

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
      if (response.status === 200) {
        const userData = response.data;
        localStorage.setItem("userProfile", JSON.stringify(userData));
        if (username === userData.username && password === userData.password) {
          if (userData.role === true) {
            Swal.fire({
              icon: "success",
              title: "Đăng nhập thành công!",
              showConfirmButton: false,
              timer: 1500,
            });
            setTimeout(() => {
              navigate("/teddy-store/homePage", {
                state: { userProfile: userData },
              });
            }, 2000);
          } else {
            Swal.fire({
              icon: "success",
              title: "Đăng nhập thành công!",
              showConfirmButton: false,
              timer: 1500,
            });
            setTimeout(() => {
              navigate("/teddy-store/homePage", {
                state: { userProfile: userData },
              });
            }, 2000);
          }
        } else if (
          username !== userData.username &&
          password === userData.password
        ) {
          Swal.fire({
            icon: "error",
            title: "Đăng nhập thất bại",
            text: "Tên đăng nhập không đúng! Vui lòng nhập lại",
          });
        }
      } else {
        Swal.fire({
          icon: "error",
          title: "Đăng nhập thất bại",
          text: "Có lỗi từ server. Vui lòng thử lại sau.",
        });
      }
    } catch (error) {
      if (error.response) {
        const status = error.response.status;
        if (status === 401) {
          Swal.fire({
            icon: "error",
            title: "Đăng nhập thất bại",
            text: "Mật khẩu hoặc tên tài khoản không đúng! Vui lòng kiểm tra lại.",
          });
        } else {
          Swal.fire({
            icon: "error",
            title: "Đăng nhập thất bại",
            text: `Lỗi không xác định (HTTP ${status})`,
          });
        }
      } else if (error.request) {
        Swal.fire({
          icon: "error",
          title: "Đăng nhập thất bại",
          text: "Không có phản hồi từ server. Vui lòng kiểm tra kết nối mạng.",
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Đăng nhập thất bại",
          text: "Đã xảy ra lỗi. Vui lòng thử lại sau.",
        });
      }
    }
  };
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
          {<LoginFaceBook />}
          <button type="button" className="btn btn-email mx-1 mb-3">
            <i className="fa-solid fa-envelope"></i>
          </button>
          <p>
            Bạn chưa có tài khoản?
            <Link to={"/teddy-store/register"} className="register mx-2">
              Đăng ký
            </Link>
          </p>
        </div>
      </div>
      <div className="container-fluid p-0 m-0">{<Footer />}</div>
    </>
  );
}
