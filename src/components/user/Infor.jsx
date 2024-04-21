import axios from "axios";
import React, { useState, useEffect } from "react";
import Sidebar from "../common/sidebar_user";
import "../user/css/infor.css";
import "../user/css/user.css";
import Nav from "../common/nav";
import Footer from "../common/footer";
import Modal from "../user/Infor_modal";
// import img from "../../assets/upload.jpg";
const Infor = () => {
  const [infor, setInfor] = useState([]);
  const [gender, setGender] = useState("");
  const [modalOpen, setModalOpen] = useState(false);

  const userProfile = JSON.parse(localStorage.getItem("userProfile"));
  useEffect(() => {
    const fetchInfor = async () => {
      try {
        const result = await axios.get(
          `http://localhost:7070/teddy-store/getDataAccWithId/${userProfile.id}`
        );
        console.log(result.data);
        setInfor(result.data);
      } catch (error) {
        console.error("Error fetching product detail:", error);
      }
    };
    fetchInfor();
  }, []);
  // Lấy ảnh và show ảnh
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = () => {
    document.getElementById("fileInput").click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setSelectedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleChange = (event) => {
    const selectedMethod = event.target.value;
    // setGender(selectedMethod);
    setInfor.gender = selectedMethod;
    console.log(setInfor.gender);
  };

  return (
    <div className="container-fluid">
      {<Nav />}
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <Sidebar />
          </div>
          <div className="col-md-9">
            {infor.map((acc) => (
              <React.Fragment key={acc.id}>
                <form className="row mx-5">
                  <h4 className="mt-5 text_brown fw-bold">Hồ sơ cá nhân</h4>
                  <div>
                    <img
                      src={selectedImage || `/img_pro/${acc.avatar}`}
                      alt="Upload"
                      className="rounded-circle mx-auto text-light d-block mt-4 bg-img"
                      style={{
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                      }}
                      onClick={handleImageClick}
                    />
                    <input
                      id="fileInput"
                      type="file"
                      accept="image/*"
                      style={{ display: "none" }}
                      onChange={handleFileChange}
                    />
                    <button className="btn"></button>
                  </div>
                  <div className="text-center text_brown mb-4">
                    Ảnh đại diện
                  </div>
                  <div className="row ">
                    <label className="col-sm-3 text-end text_brown mt-3 fw-bold">
                      Họ và tên
                    </label>
                    <div className="col-sm-9">
                      <input
                        type="text"
                        className="form-input"
                        defaultValue={acc.name}
                      ></input>
                    </div>
                  </div>
                  <div className="row my-4 text_brown">
                    <label className="col-sm-3 text-end mt-3 fw-bold">
                      Số điện thoại
                    </label>
                    <div className="col-sm-9">
                      <input
                        type="text"
                        className="form-input"
                        defaultValue={acc.phone}
                      ></input>
                    </div>
                  </div>
                  <div className="row text_brown">
                    <label className="col-sm-3 text-end mt-3 fw-bold">
                      Email
                    </label>
                    <div className="col-sm-9">
                      <input
                        type="text"
                        className="form-input"
                        defaultValue={acc.email}
                      ></input>
                    </div>
                  </div>
                  <div className="row my-4 text_brown">
                    <label className="col-sm-3 mt-3 text-end fw-bold">
                      Ngày sinh
                    </label>
                    <div className="col-sm-9">
                      <input
                        type="text"
                        className="form-input"
                        defaultValue={acc.birthday}
                      ></input>
                    </div>
                  </div>
                  <div className="row text_brown">
                    <div className="col-sm-3 text-end fw-bold">Giới tính</div>
                    <div className="col-sm-9">
                      <div className="ms-5 d-flex">
                        <label className="form-check">
                          <input
                            id="true"
                            type="radio"
                            value="true"
                            checked={acc.gender === true}
                            name="gender"
                            onClick={handleChange}
                          />
                          Nam
                          <span className="checkmark" />
                        </label>
                        <label className="form-check ms-5 ">
                          Nữ
                          <input
                            id="false"
                            type="radio"
                            name="gender"
                            value="false"
                            checked={acc.gender === false}
                            onClick={handleChange}
                          />
                          <span className="checkmark" />
                        </label>
                      </div>
                    </div>
                  </div>
                </form>
              </React.Fragment>
            ))}
            <div className="row ">
              <label className="col-sm-3 text-end mt-3 fw-bold"></label>
              <div className="col-sm-9 d-flex mt-3">
                <div className="App">
                  <button
                    className="btn text-light dark_brown px-4 "
                    onClick={() => {
                      setModalOpen(true);
                    }}
                  >
                    Chỉnh sửa
                  </button>
                  {modalOpen && <Modal setOpenModal={setModalOpen} />}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {<Footer />}
    </div>
  );
};

export default Infor;
