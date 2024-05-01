import axios from "axios";
import React, { useState, useEffect } from "react";
import Sidebar from "../common/sidebar_user";
import "../user/css/infor.css";
import "../user/css/user.css";
import Nav from "../common/nav";
import Footer from "../common/footer";
import {message } from 'antd';
// import Modal from "../user/Infor_modal";
// import img from "../../assets/upload.jpg";
const Infor = () => {
  const [infor, setInfor] = useState([]);
  const updatedInfor = [...infor];
  // const [modalOpen, setModalOpen] = useState(false);
  
  const userProfile = JSON.parse(localStorage.getItem("userProfile"));
  useEffect(() => {
    const fetchInfor = async () => {
      try {
        const result = await axios.get(
          `http://localhost:7070/teddy-store/getDataAccWithId/${userProfile.id}`
        );
        console.log(result.data);
        setInfor(result.data);
        const accInfor = result.data;
        localStorage.setItem("accInfor", JSON.stringify(accInfor));
      } catch (error) {
        console.error("Error fetching product detail:", error);
      }
    };
    
    fetchInfor();
  }, [userProfile.id]);
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
        const fileName = file.name; // Lấy tên của file
        console.log("Avatar đã thay đổi:", fileName);

        // Cập nhật tên avatar trong thông tin infor
        setInfor(prevInfor => {
          const updatedInfor = [...prevInfor];
          updatedInfor.forEach(acc => {
            acc.avatar = fileName;
          });
          console.log(updatedInfor);
          return updatedInfor;

        });

      };
      reader.readAsDataURL(file);
    }
  };
  const handleChange = (id, value) => {
    setInfor(prevInfor => {
      const updatedInfor = prevInfor.map(acc => {
        if (acc.id === id) {
          return {
            ...acc,
            gender: value
          };
        }
        return acc;
      });
      return updatedInfor;
    });
  };

  const handleNameChange = (id, value) => {
    setInfor(prevInfor => {
      const updatedInfor = prevInfor.map(acc => {
        if (acc.id === id) {
          return {
            ...acc,
            name: value
          };
        }
        return acc;
      });
      return updatedInfor;
    });
  };

  const handlephoneChange = (id, value) => {
    setInfor(prevInfor => {
      const updatedInfor = prevInfor.map(acc => {
        if (acc.id === id) {
          return {
            ...acc,
            phone: value
          };
        }
        return acc;
      });
      return updatedInfor;
    });
  };
  const handleEmailChange = (id, value) => {
    setInfor(prevInfor => {
      const updatedInfor = prevInfor.map(acc => {
        if (acc.id === id) {
          return {
            ...acc,
            email: value
          };
        }
        return acc;
      });
      return updatedInfor;
    });
  };
  const handlebirthdayChange = (id, value) => {
    setInfor(prevInfor => {
      const updatedInfor = prevInfor.map(acc => {
        if (acc.id === id) {
          return {
            ...acc,
            birthday: value
          };
        }
        return acc;
      });
      return updatedInfor;
    });
  };
  
  const handleUpdate = async () => {
    const avt = updatedInfor.map(avt => avt.avatar).join(',');
    const name = updatedInfor.map(avt => avt.name).join(',');
    const gender = updatedInfor.map(avt => avt.gender).join(',');
    const birthday = updatedInfor.map(avt => avt.birthday).join(',');
    const email = updatedInfor.map(avt => avt.email).join(',');
    const phone = updatedInfor.map(avt => avt.phone).join(',');
    console.log("inforUpdate", avt,name,gender,phone,email,birthday);
    try {
      await axios.put(`http://localhost:7070/teddy-store/updateInfor/${userProfile.id}`, { 
         
          avatar: avt,
          name : name,
          gender:gender,
          birthday: birthday,
          email: email,
          phone: phone
         
      });
      message.success('Thông tin đã được cập nhật thành công');
      console.log("Thông tin đã được cập nhật thành công!");
    } catch (error) {
      console.error("Error updating user info:", error);
    }
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
                        value={acc.name}
                        onChange={(e) => handleNameChange(acc.id, e.target.value)}
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
                        value={acc.phone}
                        onChange={(e) => handlephoneChange(acc.id, e.target.value)}
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
                        value={acc.email}
                        onChange={(e) => handleEmailChange(acc.id, e.target.value)}
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
                        value={acc.birthday}
                        onChange={(e) => handlebirthdayChange(acc.id, e.target.value)}
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
                            onClick={() => handleChange(acc.id, true)}
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
                            onClick={() => handleChange(acc.id, false)}
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
                    onClick= {handleUpdate}
                  >
                    Chỉnh sửa
                  </button> 
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
