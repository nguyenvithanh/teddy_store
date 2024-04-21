import React, { useState } from "react";
import Sidebar from "../common/sidebar_user";
import "../user/css/user.css";
import Nav from "../common/nav";
import Footer from "../common/footer";
import Modal from "../user/modal";

const Detail_order = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="container-fluid">
      <Nav />
      <div className="container ">
        <div className="row">
          <div className="col-md-3">
            <Sidebar />
          </div>
          <div className="col-md-9 ">
            <h4 className="mt-5 text_brown fw-bold">Chi tiết đơn hàng</h4>
            <div className="card p-4 rounded-4">
              <table className="table table-sm ">
                <thead>
                  <tr>
                    <th scope="col">
                      <div className="brown_color">STT</div>
                    </th>
                    <th scope="col">
                      <div className="brown_color ">Giá</div>
                    </th>
                    <th scope="col">
                      <div className="brown_color text-center">Số lượng</div>
                    </th>
                    <th scope="col">
                      <div className="brown_color text-center">Tổng</div>
                    </th>
                    <th scope="col" />
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <div className="brown_color text-center fw-bold">1</div>
                    </td>
                    <td>
                      <div className="product_cart d-flex ">
                        <div className="img_teddy">
                          <img
                            className="rounded "
                            style={{ width: "100%" }}
                            src="img/gaubong1.jpg"
                            alt
                          />
                        </div>
                        <div className="infor_teddy ms-3 brown_color ">
                          <div className="fw-bold">Gấu teddy lông xoăn</div>
                          <div>
                            Màu <strong>Hồng</strong>
                          </div>
                          <div>
                            Size <strong>1m4</strong>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="">
                      <div className="brown_color">120.000 VND</div>
                    </td>
                    <td>
                      <div className="brown_color text-center fw-bold">1</div>
                    </td>
                    <td>
                      <div className="brown_color fw-bold text-center">
                        320.000 VND
                      </div>
                    </td>
                    <td>
                      <i className="bi bi-trash brown_color" />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="brown_color text-center fw-bold">2</div>
                    </td>

                    <td>
                      <div className="brown_color fw-bold text-start">
                        Thêu lên áo gấu bông theo yêu cầu
                      </div>
                      <div className="brown_color text-start mx-3">
                        Mặt trước: Nguyễn Ngọc Bảo Anh <br />
                        mặt sau: Trường Tiểu học Xuân Thọ. Chữ màu vàng
                      </div>
                    </td>
                    <td className="">
                      <div className="">100.000 VND</div>
                    </td>
                    <td>
                      <div className="brown_color  text-center fw-bold">2</div>
                    </td>
                    <td>
                      <div className="brown_color  text-center fw-bold">
                        200.000 VND
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="brown_color text-center fw-bold">3</div>
                    </td>
                    <td>
                      <div className="product_cart d-flex">
                        <div className="img_teddy">
                          <img
                            className="rounded "
                            style={{ width: "100%" }}
                            src="img/gaubong1.jpg"
                            alt
                          />
                        </div>
                        <div className="infor_teddy ms-3 brown_color ">
                          <div className="fw-bold">Gấu teddy lông xoăn</div>
                          <div>
                            Màu <strong>Hồng</strong>
                          </div>
                          <div>
                            Size <strong>1m4</strong>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="">
                      <div className="brown_color">120.000 VND</div>
                    </td>
                    <td>
                      <div className="brown_color text-center fw-bold">1</div>
                    </td>
                    <td>
                      <div className="brown_color text-center fw-bold">
                        120.000 VND
                      </div>
                    </td>
                    <td>
                      <i className="bi bi-trash brown_color" />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="card rounded-4 p-4 mt-4">
              <h5 className="fw-bold brown_color mt-4">Thông tin khách hàng</h5>
              <table class="table table-borderless mt-4">
                <tbody>
                  <tr>
                    <td className="fw-bold">Mã đơn hàng</td>
                    <td className="text-end">2403047PENWAFT</td>
                  </tr>
                  <tr>
                    <td className="fw-bold">Tên người nhận</td>
                    <td className="text-end">Nguyễn Ánh Xuân </td>
                  </tr>
                  <tr>
                    <td className="fw-bold">Email</td>
                    <td className="text-end">anhxuan346@gmail.com</td>
                  </tr>
                  <tr>
                    <td className="fw-bold">Số Điện thoại</td>
                    <td className="text-end">0358964751</td>
                  </tr>
                  <tr>
                    <td className="fw-bold">Đia chỉ nhận hàng</td>
                    <td className="text-end">
                      45/786 Nguyễn Văn Trứ, Phường 8, quận 7, Hồ Chí Minh
                    </td>
                  </tr>
                  <tr>
                    <td className="fw-bold">Ghi chú</td>
                    <td className="text-end">
                      Mặt trước: Nguyễn Ngọc Bảo Anh <br />
                      mặt sau: Trường Tiểu học Xuân Thọ. Chữ màu vàng
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="card rounded-4 p-4 mt-4">
              <h5 className="fw-bold brown_color mt-4">Tóm tắt đơn hàng</h5>
              <table class="table mt-3 table-borderless w-75 text-center">
                <tbody>
                  <tr>
                    <td className="text-end fw-bold ">Ngày đặt</td>
                    <td className="text-end">14/03/2024</td>
                  </tr>
                  <tr>
                    <td className="text-end fw-bold ">Giờ đặt</td>
                    <td className="text-end">09:25 am</td>
                  </tr>
                  <tr>
                    <td className="text-end fw-bold ">Tổng tiền sản phẩm</td>
                    <td className="text-end">320.000 VND</td>
                  </tr>
                  <tr>
                    <td className="text-end fw-bold ">Phí vận chuyển</td>
                    <td className="text-end">40.000 VND</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="card rounded-4 p-4 mt-4">
              <table class="table mt-3 table-borderless w-75 text-center">
                <tbody>
                  <tr>
                    <td className="text-end fw-bold ">Tổng thanh toán:</td>
                    <td className="text-end fw-bold text-warning">
                      350.000 VND
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="card rounded-4 p-4 mt-4">
              <table class="table mt-3 table-borderless text-center">
                <tbody>
                  <tr>
                    <td className="text-end fw-bold">
                      Phương thức thanh toán:
                    </td>
                    <td className="fs-5">Thanh toán khi nhận hàng</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="d-flex justify-content-center mt-3">
              <button className="openModalBtn">Mua lại</button>
              <div className="App">
                <button
                  className="openModalBtn"
                  onClick={() => {
                    setModalOpen(true);
                  }}
                >
                  Đánh giá
                </button>
                {modalOpen && <Modal setOpenModal={setModalOpen} />}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Detail_order;
