import axios from "axios";
import React, { useEffect, useState } from "react";
import "../admin/css/index-admin.css";
import Admin_banner from "../../assets/admin_banner.jpg";
import { EyeOutlined, TeamOutlined ,ShoppingOutlined ,CloseCircleOutlined } from '@ant-design/icons';
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
                console.log(productDetails.data)
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
                            <h5>Lượt truy cập</h5>
                        </div>
                    </Card>
                </Col>
                <Col>
                    <Card bordered={false}>
                        <div className="icon2">
                            <TeamOutlined  />
                        </div>
                        <div>
                            <h3>4399</h3>
                            <h5>Khách hàng</h5>
                        </div>
                    </Card>
                </Col>
                <Col >
                    <Card >
                        <div className="icon3">
                            <ShoppingOutlined />
                        </div>
                        <div>
                            <h3>4000</h3>
                            <h5>Đơn hàng</h5>
                        </div>
                    </Card>
                </Col>
                <Col >
                    <Card >
                        <div className="icon4">
                            <CloseCircleOutlined />
                        </div>
                        <div>
                            <h3>4000</h3>
                            <h5>Đơn hủy</h5>
                        </div>
                    </Card>
                </Col>
            </Row>
            <Row >
                <div className="col-7 col-7-donhang ">
                    <h4>Đơn hàng mới nhất</h4>
                    {orderDetail.map(orderDetail =>(
                        <table className="donhang" key={orderDetail.id}>
                        <tr>
                            <td>{orderDetail.date}</td>
                            <td>{orderDetail.id}</td>
                            <td>{orderDetail.status}</td>
                            <td>{orderDetail.price_unit}</td>
                        </tr>
                        </table>
                    ))}  
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
                    {productDetails.map(productDetails => (
                    <table className="sanpham" key={productDetails.id}>

                        <tr>
                            <td>{productDetails.id}</td>
                            <td className="img_sp">
                                <img src={`/img_pro/${productDetails.img_url}`} alt="#" />
                                <p>{productDetails.name}</p>
                            </td>
                            <td>{productDetails.color}</td>
                            <td>{productDetails.size}</td>
                            <td>{productDetails.purchases}</td>
                        </tr>
                        
                        

                    </table>
                    ))}
                </div>
            </Row>

        </>
    );
};

export default HomePageForm;
