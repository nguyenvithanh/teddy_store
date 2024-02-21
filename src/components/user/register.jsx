import React from "react";
import Navigation from "../common/nav.jsx";
export default function register() {
    return (
      <>
         <div className="container-fluid p-0 m-0">
        <div className="container-fluid">{<Navigation />}</div>
     
      </div>
        <div>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=
    , initial-scale=1.0" /> 
  <title>Document</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossOrigin="anonymous" />
  <div className="container py-3 my-5 w-50 border rounded p-0">
    <h2 className="text-center">Đăng ký</h2>
    <div className="container px-5">
      {/* form start */}
      <form>
        <div className="mb-3">
          <label className="form-label">Tên</label>
          <input type="text" className="form-control" />
        </div>
        <div className="mb-3 row">
          <div className="col-md-6">
            <label className="form-label">Điện thoại</label>
            <input type="email" className="form-control" /> 
          </div>
          <div className="col-md-6">
            <label className="form-label">Ngày sinh</label>
            <input type="date" className="form-control" />
          </div>
        </div>
        <div className="mb-3">
          <label className="form-label">Email </label>
          <input type="email" className="form-control" />
        </div>
        <div className="mb-3 d-flex">
          <label className="form-label me-5">Giới tính</label>
          <div className="form-check me-2">
            <input className="form-check-input" type="radio" name="gender" id="male" defaultValue="male" />
            <label className="form-check-label" htmlFor="male">Nam</label>
          </div>
          <div className="form-check me-2">
            <input className="form-check-input" type="radio" name="gender" id="female" defaultValue="female" />
            <label className="form-check-label" htmlFor="female">Nữ</label>
          </div>
          <div className="form-check me-2">
            <input className="form-check-input" type="radio" name="gender" id="other" defaultValue="other" />
            <label className="form-check-label" htmlFor="other">Khác</label>
          </div>
        </div>
        <div className="mb-3">
          <label className="form-label">Mật khẩu </label>
          <input type="password" className="form-control" />
        </div>
        <div className="mb-3">
          <label className="form-label">Nhập lại mật khẩu</label>
          <input type="password" className="form-control" />
        </div>
        <div className="mb-3 d-flex flex-column align-items-center"><br />
          <button style={{backgroundColor: '#644c38', borderRadius: 10}} type="submit" className="btn btn-primary px-5 mb-3">Đăng ký</button>
<p>Bạn đã có tài khoản? <a href="#" style={{color: '#644c38'}}>Đăng nhập</a></p>
        </div>
      </form>
    </div>
    {/* end form */}
    <div className="text-center mb-4">
      <hr className="my-4 mx-3" style={{border: 'none', borderTop: '1px solid #000', width: '30%', display: 'inline-block', verticalAlign: 'middle'}} />
      <span style={{verticalAlign: 'middle'}}>Đăng nhập với</span>
      <hr className="my-4 mx-3" style={{border: 'none', borderTop: '1px solid #000', width: '30%', display: 'inline-block', verticalAlign: 'middle'}} />
      <br />
      <div className="my-3">
        <button style={{borderRadius: 10}} type="submit" className="btn px-5 me-3 border">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Facebook_icon.svg/1200px-Facebook_icon.svg.png" alt="Facebook" style={{verticalAlign: 'middle', marginRight: 5, width: 32, height: 32}} />
          Facebook
        </button>
        <button style={{borderRadius: 10}} type="submit" className="btn px-5 border">
          <img src="https://www.google.com/gmail/about/static/images/logo-gmail.png" alt="Google" style={{verticalAlign: 'middle', marginRight: 5, width: 32, height: 32}} />
          Gmail
        </button>
      </div>
      <br />
      <p>Bạn chưa có tài khoản? <a href="#" style={{color: '#644c38'}}>Đăng ký</a></p>
    </div>
  </div>
</div>

      </>
    );
  }