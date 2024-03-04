import React from "react";
import "../common/css/index-user.css";
import Navigation from "../common/nav.jsx";
import Banner from "../common/banner.jsx";
import Footer from "../common/footer.jsx";
import TopBear from "./TopBear.jsx";

export default function index() {
  return (
    <>
      <div className="container-fluid p-0 m-0">
        <div className="container-fluid p-0 m-0" >{<Navigation />}</div>
        <div className="container-fluid p-0 m-0" >{<Banner />}</div>
        <div className="container p-0 my-5">
          <div className="title-topbear text-center">
            <h3>Top gấu bán chạy</h3>
          </div>
          <div className="product-topbear">
            <div className="row">
              <TopBear />
            </div>
          </div>
        </div>
        <div className="container-fluid p-0 m-0">{<Footer />}</div>
      </div>
    </>
  );
}
