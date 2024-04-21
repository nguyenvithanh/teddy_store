import React from "react";
import Sidebar from "../common/sidebar_user";
import Nav from "../common/nav";
import Footer from "../common/footer";
const Order = () => {
  return (
    <div className="container-fluid">
      <Nav></Nav>
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <Sidebar />
          </div>
          <div className="col-md-9">
            <form className="row mx-5">
              <h4 className="mt-5 text_brown fw-bold">Đổi mật khẩu</h4>
              <div className="row mt-4">
                <label className="col-sm-3 text-end brown_color mt-3 fw-bold">
                  Mật khẩu cũ
                </label>
                <div className="col-sm-9">
                  <input type="text" className="form-input"></input>
                </div>
              </div>
              <div className="row my-4">
                <label className="col-sm-3 text-end brown_color mt-3 fw-bold">
                  Mật khẩu mới
                </label>
                <div className="col-sm-9">
                  <input type="text" className="form-input"></input>
                </div>
              </div>
              <div className="row ">
                <label className="col-sm-3 text-end brown_color mt-3 fw-bold">
                  Nhập lại mật khẩu{" "}
                </label>
                <div className="col-sm-9">
                  <input type="text" className="form-input"></input>
                </div>
              </div>
              <div className="row ">
                <label className="col-sm-3 text-end brown_color mt-3 fw-bold">
                  {" "}
                </label>
                <div className="col-sm-9 d-flex mt-3">
                  <button className="btn text-light fw-bold bg_brown rounded-5 px-4 me-4">
                    Lưu
                  </button>
                  <button className="btn text-light fw-bold bg_brown rounded-5 px-4 ">
                    Hủy
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Order;
