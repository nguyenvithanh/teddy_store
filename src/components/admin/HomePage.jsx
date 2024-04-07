import axios from "axios";
import React, { useEffect, useState } from "react";
import "../admin/css/index-admin.css";
import Admin_banner from "../../assets/admin_banner.jpg";
import { EyeOutlined, DollarOutlined } from '@ant-design/icons';
import { Carousel, Card, Col, Row } from 'antd';


const HomePageForm = () => {

    const [productDetails, setProductDetails] = useState([]);
    const [orderDetail, setOrderDetail] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const productDetailsResponse = axios.get('http://localhost:7070/teddy-store/product-details');
                const orderDetailResponse = axios.get('http://localhost:7070/teddy-store/DetailsOrders');

                const [productDetailsData, orderDetailData] = await Promise.all([productDetailsResponse, orderDetailResponse]);

                setProductDetails(productDetailsData.data);
                setOrderDetail(orderDetailData.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    })
    return (
        <>
            <Carousel>
                <div>
                    <div className="demo-logo-vertical" /><a className=" ">
                        <img src={Admin_banner} alt="Logo" />
                    </a>

                </div>

            </Carousel>
            <Row justify="center">
                <Col >
                    <Card bordered={false} >
                        <div className="icon1">
                            <EyeOutlined />
                        </div>
                        <div>
                            <h3>4301</h3>
                            <p>Lượt truy cập</p>
                        </div>
                    </Card>
                </Col>
                <Col>
                    <Card bordered={false}>
                        <div className="icon2">
                            <DollarOutlined />
                        </div>
                        <div>
                            <h3>4399</h3>
                            <p>Doanh thu</p>
                        </div>
                    </Card>
                </Col>
                <Col >
                    <Card >
                        <div className="icon3">
                            <DollarOutlined />
                        </div>
                        <div>
                            <h3>4000</h3>
                            <p>Đơn hàng</p>
                        </div>
                    </Card>
                </Col>
                <Col >
                    <Card >
                        <div className="icon3">
                            <DollarOutlined />
                        </div>
                        <div>
                            <h3>4000</h3>
                            <p>Đơn hàng</p>
                        </div>
                    </Card>
                </Col>
            </Row>
            <Row >
                <div className="col-7 col-7-donhang ">
                    <h4>Đơn hàng mới nhất</h4>
                    <table className="donhang">
                        <tr>
                            <td>03/03/2024</td>
                            <td>ID12345667</td>
                            <td>Đã thanh toán</td>
                            <td>150.000đ</td>
                        </tr>
                        <tr>
                            <td>03/03/2024</td>
                            <td>ID12345667</td>
                            <td>Đã thanh toán</td>
                            <td>150.000đ</td>
                        </tr>
                        <tr>
                            <td>03/03/2024</td>
                            <td>ID12345667</td>
                            <td>Đã thanh toán</td>
                            <td>150.000đ</td>
                        </tr>
                        <tr>
                            <td>03/03/2024</td>
                            <td>ID12345667</td>
                            <td>Đã thanh toán</td>
                            <td>150.000đ</td>
                        </tr>
                    </table>
                </div>
                <div className="col-5">
                    <div className="doanhthu">
                        <div class="dropdown">
                            <button type="button" class="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown">
                                Dropdown button
                            </button>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="#">Link 1</a></li>
                                <li><a class="dropdown-item" href="#">Link 2</a></li>
                                <li><a class="dropdown-item" href="#">Link 3</a></li>
                                <li><a class="dropdown-item-text" href="#">Text Link</a></li>
                                <li><span class="dropdown-item-text">Just Text</span></li>
                            </ul>
                        </div>
                        <div>
                            
                        </div>
                    </div>
                </div>
            </Row>
            <Row>
                <div className="col-7 col-7-sanpham">
                    <h4>Sản phẩm bán chạy nhất</h4>
                    <table className="sanpham">

                        <tr>
                            <td>ID</td>
                            <td>
                                <img src="" alt="#" />
                                <p>Gấu teddy tóc xoăn</p>
                            </td>
                            <td>Nâu</td>
                            <td>40cm</td>
                            <td>100</td>
                        </tr>
                        <tr>
                            <td>ID</td>
                            <td>
                                <img src="" alt="#" />
                                <p>Gấu teddy tóc xoăn</p>
                            </td>
                            <td>Nâu</td>
                            <td>40cm</td>
                            <td>100</td>
                        </tr>
                        <tr>
                            <td>ID</td>
                            <td>
                                <img src="" alt="#" />
                                <p>Gấu teddy tóc xoăn</p>
                            </td>
                            <td>Nâu</td>
                            <td>40cm</td>
                            <td>100</td>
                        </tr>

                    </table>
                </div>
            </Row>

        </>
    );
};

export default HomePageForm;
