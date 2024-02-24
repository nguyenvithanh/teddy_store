import React, {useEffect, useState} from "react";
import Navigation from "../common/nav.jsx";
import "./css/register.css"
import userAPI from "../api/userAPI";
import {useNavigate} from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import Button from 'react-bootstrap/Button';
import forgotPasswordImg from './images/forget-password-img.jpg'

export default function Register() {
    const navigate = useNavigate();

    const [show, setShow] = useState(false);
    const [emailForgotPassword, setEmailForgotPassword] = useState(''); // email to reset password
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [dob, setDob] = useState(''); // dob: date of birth
    const [email, setEmail] = useState('');
    const [gender, setGender] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');


    const [isNameValid, setIsNameValid] = useState(false);
    const [isPhoneValid, setIsPhoneValid] = useState(false);
    const [isDobValid, setIsDobValid] = useState(false);
    const [isEmailValid, setIsEmailValid] = useState(false);
    const [isGenderValid, setIsGenderValid] = useState(false);
    const [isUsernameValid, setIsUsernameValid] = useState(false);
    const [isPasswordValid, setIsPasswordValid] = useState(false);
    const [isConfirmPasswordValid, setIsConfirmPasswordValid] = useState(false);

    useEffect(() => {
        setIsNameValid(name.trim() !== '');
        setIsPhoneValid(phone.trim() !== '');
        setIsDobValid(dob.trim() !== '');
        setIsEmailValid(email.trim() !== '');
        setIsGenderValid(gender.trim() !== '');
        setIsUsernameValid(username.trim() !== '');
        setIsPasswordValid(password.trim() !== '');
        setIsConfirmPasswordValid(password.trim() === confirmPassword);
    }, [
        name,
        phone,
        dob,
        email,
        gender,
        username,
        password,
        confirmPassword
    ]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            name: name,
            phone: phone,
            dob: dob,
            email: email,
            gender: gender,
            username: username,
            password: password,
            confirmPassword: confirmPassword
        }
        // check value of data is not empty
        if (isNameValid
            && isPhoneValid
            && isDobValid
            && isEmailValid
            && isGenderValid
            && isUsernameValid
            && isPasswordValid
            && isConfirmPasswordValid
        ) {
            userAPI.register(data, navigate).then(r => r);
        }
    };

    const resetPassword = (e) => {
        e.preventDefault();
        const data = {
            email: emailForgotPassword
        }
        userAPI.resetPassword(data).then(r => r);
    }

    return (<>
        <div className="container-fluid p-0 m-0">
            <div className="container-fluid">{<Navigation/>}</div>

        </div>
        <div>
            <meta charSet="UTF-8"/>
            <meta name="viewport" content="width=
    , initial-scale=1.0"/>
            <title>Document</title>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet"
                  integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
                  crossOrigin="anonymous"/>
            <div className="container py-3 my-5 w-50 border rounded p-0">
                <h2 className="text-center">Đăng ký</h2>
                <div className="container px-5">
                    {/* form start */}
                    <form>
                        <div className="mb-3">
                            <label className="form-label">Tên</label>
                            <input type="text" className="form-control" required={true}
                                   onChange={(e) => setName(e.target.value)}
                            />
                            {isNameValid ? null : (<div className="invalid">
                                Vui lòng nhập tên
                            </div>)}
                        </div>
                        <div className="mb-3 row">
                            <div className="col-md-6">
                                <label className="form-label">Điện thoại</label>
                                <input type="email" className="form-control" required={true}
                                       onChange={(e) => setPhone(e.target.value)}
                                />
                                {isPhoneValid ? null : (
                                    <div className="invalid">
                                        Vui lòng nhập số điện thoại
                                    </div>
                                )}
                            </div>
                            <div className="col-md-6">
                                <label className="form-label">Ngày sinh</label>
                                <input type="date" className="form-control" required={true}
                                       onChange={(e) => setDob(e.target.value)}
                                />
                                {isDobValid ? null : (
                                    <div className="invalid">
                                        Vui lòng nhập ngày sinh
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Email </label>
                            <input type="email" className="form-control" required={true}
                                   onChange={(e) => setEmail(e.target.value)}
                            />
                            {isEmailValid ? null : (
                                <div className="invalid">
                                    Vui lòng nhập email
                                </div>
                            )}
                        </div>
                        <div className="mb-3">
                            <div className="d-flex">
                                <label className="form-label me-5">Giới tính</label>
                                <div className="form-check me-2">
                                    <input className="form-check-input" type="radio" name="gender" id="male"
                                           defaultValue="true" required={true}
                                           onChange={(e) => setGender(e.target.value)}
                                    />
                                    <label className="form-check-label" htmlFor="male">Nam</label>
                                </div>
                                <div className="form-check me-2">
                                    <input className="form-check-input" type="radio" name="gender" id="female"
                                           defaultValue="false" required={true}
                                           onChange={(e) => setGender(e.target.value)}
                                    />
                                    <label className="form-check-label" htmlFor="female">Nữ</label>
                                </div>
                            </div>
                            {isGenderValid ? null : (
                                <div className="invalid">
                                    Vui lòng chọn giới tính
                                </div>
                            )}
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Tên đăng nhập </label>
                            <input type="text" className="form-control" required={true}
                                   onChange={(e) => setUsername(e.target.value)}/>
                            {isUsernameValid ? null : (
                                <div className="invalid">
                                    Vui lòng nhập tên đăng nhập
                                </div>
                            )}
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Mật khẩu </label>
                            <input type="password" className="form-control" required={true}
                                   onChange={(e) => setPassword(e.target.value)}
                            />
                            {isPasswordValid ? null : (
                                <div className="invalid">
                                    Vui lòng nhập mật khẩu
                                </div>
                            )}
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Nhập lại mật khẩu</label>
                            <input type="password" className="form-control" required={true}
                                   onChange={(e) => setConfirmPassword(e.target.value)}
                            />
                            {isConfirmPasswordValid ? null : (
                                <div className="invalid">
                                    Vui lòng nhập lại mật khẩu
                                </div>
                            )}
                        </div>
                        <div className="mb-3 d-flex flex-column align-items-center"><br/>
                            <button style={{backgroundColor: '#644c38', borderRadius: 10}} type="submit"
                                    className="btn btn-primary px-5 mb-3"
                                    onClick={handleSubmit}
                            >Đăng ký
                            </button>
                            <p>Bạn đã có tài khoản? <a href="#" style={{color: '#644c38'}}>Đăng nhập</a></p>
                            <p>Bạn quên mật khẩu?
                                <a href="javascript:;" style={{color: '#644c38'}}
                                   onClick={handleShow}
                                >Quên mật khẩu</a>
                            </p>
                        </div>
                    </form>
                </div>
                {/* end form */}
                <div className="text-center mb-4">
                    <hr className="my-4 mx-3" style={{
                        border: 'none',
                        borderTop: '1px solid #000',
                        width: '30%',
                        display: 'inline-block',
                        verticalAlign: 'middle'
                    }}/>
                    <span style={{verticalAlign: 'middle'}}>Đăng nhập với</span>
                    <hr className="my-4 mx-3" style={{
                        border: 'none',
                        borderTop: '1px solid #000',
                        width: '30%',
                        display: 'inline-block',
                        verticalAlign: 'middle'
                    }}/>
                    <br/>
                    <div className="my-3">
                        <button style={{borderRadius: 10}} type="submit" className="btn px-5 me-3 border">
                            <img
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Facebook_icon.svg/1200px-Facebook_icon.svg.png"
                                alt="Facebook"
                                style={{verticalAlign: 'middle', marginRight: 5, width: 32, height: 32}}/>
                            Facebook
                        </button>
                        <button style={{borderRadius: 10}} type="submit" className="btn px-5 border">
                            <img src="https://www.google.com/gmail/about/static/images/logo-gmail.png" alt="Google"
                                 style={{verticalAlign: 'middle', marginRight: 5, width: 32, height: 32}}/>
                            Gmail
                        </button>
                    </div>
                    <br/>
                    <p>Bạn chưa có tài khoản? <a href="#" style={{color: '#644c38'}}>Đăng ký</a></p>
                </div>
            </div>
        </div>


        <Modal
            show={show}
            onHide={handleClose}
            size={"lg"}
            centered={true}
        >
            <Modal.Header closeButton>
            </Modal.Header>
            <Modal.Body>
                <div className={"center"}>
                    <img src={forgotPasswordImg} alt="forget-password" className={"img"}/>
                    <h5>Quên mật khẩu</h5>
                    <span>Vui lòng cung cấp email đăng nhập, chúng tôi sẽ gửi mật khẩu reset về email của bạn.</span>
                </div>
                <form className={"form-forgot"}>
                    <div className="mb-3">
                        <label className="form-label">Email</label>
                        <input type="email" className="form-control" required={true}
                               onChange={(e) => setEmailForgotPassword(e.target.value)}
                        />
                    </div>
                    <div className="mb-3 d-flex flex-column align-items-center">
                        <Button style={{backgroundColor: '#644c38', borderRadius: 10}} type="submit"
                                className="btn btn-primary px-5 mb-3"
                                onClick={resetPassword}
                        >Cấp lại mật khẩu
                        </Button>
                    </div>
                </form>
            </Modal.Body>
        </Modal>
    </>
);
}