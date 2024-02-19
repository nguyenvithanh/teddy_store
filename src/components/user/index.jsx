import React from "react";
import "../common/css/index-user.css";
import Navigation from "../common/nav.jsx";
import Banner from "../common/banner.jsx";
import Footer from "../common/footer.jsx";
import { CloudinaryContext, Image } from "cloudinary-react";

export default function index() {
  return (
    <>
      <div className="container-fluid p-0 m-0">
        <div className="container-fluid p-0 m-0">{<Navigation />}</div>
        <div className="container-fluid p-0 m-0">{<Banner />}</div>
        <div className="container p-0 my-5">
          <div className="title-topbear text-center">
            <h3>Top gấu bán chạy</h3>
          </div>
          <div className="product-topbear">
            <div className="row">
              <div className="col-12 col-sm-6 col-md-3 col-lg-3">
                <div className="product-card card text-center" style={{ width: "18rem;" }}>
                  <CloudinaryContext cloudName="your_cloud_name">
                    <Image publicId="your_image_public_id" />
                  </CloudinaryContext>
                  <div className="card-body">
                    <h5 className="card-title">Name of product</h5>
                    <p className="card-text">Price đ</p>
                    <a href="#" className="btn mx-2 btn-primary">
                      Size
                    </a>
                    <a href="#" className="btn mx-2 btn-primary">
                      Size
                    </a>
                    <a href="#" className="btn mx-2 btn-primary">
                      Size
                    </a>
                    <a href="#" className="btn mx-2 btn-primary">
                      Size
                    </a>
                  </div>
                  <div className="card-product-hover">
                    <button type="submit" className="btn mx-2 btn-primary">
                      <i className="fa-solid fa-bag-shopping"></i>a
                    </button>
                    <button type="submit" className="btn mx-2 btn-primary">
                      <i className="fa-regular fa-eye"></i>v
                    </button>
                    <button type="submit" className="btn mx-2 btn-primary">
                      <i className="fa-regular fa-heart"></i>c
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-6 col-md-3 col-lg-3"></div>
              <div className="col-12 col-sm-6 col-md-3 col-lg-3"></div>
              <div className="col-12 col-sm-6 col-md-3 col-lg-3"></div>
              <div className="col-12 col-sm-6 col-md-3 col-lg-3"></div>
              <div className="col-12 col-sm-6 col-md-3 col-lg-3"></div>
              <div className="col-12 col-sm-6 col-md-3 col-lg-3"></div>
              <div className="col-12 col-sm-6 col-md-3 col-lg-3"></div>
            </div>
          </div>
        </div>
        <div className="container-fluid p-0 m-0">{<Footer />}</div>
      </div>
    </>
  );
}
