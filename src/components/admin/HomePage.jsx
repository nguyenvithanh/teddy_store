import axios from "axios";
import React, { useEffect, useState } from "react";
import "../admin/css/home-admin.css";
import Admin_banner from "../../assets/admin_banner.jpg";
import {
  EyeOutlined,
  DollarOutlined,
  ArrowRightOutlined,
} from "@ant-design/icons";
import { Carousel, Table, Card, Col, Row } from "antd";
import { Chart } from "react-google-charts";

const HomePageForm = () => {
  const columns = [
    {
      title: "Ngày",
      dataIndex: "date",
      key: "date",
    },
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Trạng thái",
      dataIndex: "status",
      key: "status",
    },
    {
      title: "Thành tiền",
      dataIndex: "price_unit",
      key: "price_unit",
    },
    {
      dataIndex: "",
      key: "x",
      render: () => (
        <a href="{Adminorder}">
          <ArrowRightOutlined />
        </a>
      ),
    },
  ];

  const columnssp = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Tên",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Màu",
      dataIndex: "color",
      key: "color",
    },
    {
      title: "Size",
      dataIndex: "size",
      key: "size",
    },
    {
      title: "Lượt mua",
      dataIndex: "purchases",
      key: "purchases",
    },
  ];
  const data = [
    ["Báo cáo", "Doanh thu"],
    ["Bút", 3],
    ["Gấu ", 2],
    ["Thú bông", 3],
    ["Hoạt hình", 2],
    // CSS-style declaration
  ];
  const options = {
    legend: "none",
    pieSliceText: "label",
    title: "Doanh thu",
    pieHole: 0.4,
    pieStartAngle: 100,
  };
  const [productDetails, setProductDetails] = useState([]);
  const [orderDetail, setOrderDetail] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const productDetailsResponse = axios.get(
          "http://localhost:7070/teddy-store/product-details"
        );
        const orderDetailResponse = axios.get(
          "http://localhost:7070/teddy-store/DetailsOrders"
        );

        const [productDetailsData, orderDetailData] = await Promise.all([
          productDetailsResponse,
          orderDetailResponse,
        ]);

        setProductDetails(productDetailsData.data);
        setOrderDetail(orderDetailData.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  });
  return (
    <>
      <Carousel>
        <div>
          <div className="demo-logo-vertical" />
          <a className=" ">
            <img src={Admin_banner} alt="Logo" />
          </a>
        </div>
      </Carousel>
      <Row justify="center">
        <Col span={7}>
          <Card bordered={false}>
            <div className="icon1">
              <EyeOutlined />
            </div>
            <div>
              <h3>4301</h3>
              <p>Lượt truy cập</p>
            </div>
          </Card>
        </Col>
        <Col span={7}>
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
        <Col span={7}>
          <Card>
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
      <Row>
        <Col span={14}>
          <Table
            pagination={false}
            columns={columns}
            dataSource={orderDetail}
            bordered
            title={() => "Đơn hàng mới nhất"}
          />

          <Table
            dataSource={productDetails}
            columns={columnssp}
            pagination={false}
            className="table-admin"
            title={() => "Sản phẩm bán chạy nhất"}
          />
        </Col>
        <Col span={10}>
          <div className="chart">
            <Chart
              chartType="PieChart"
              data={data}
              options={options}
              width={"100%"}
              height={"400px"}
            />
          </div>
        </Col>
      </Row>
    </>
  );
};

export default HomePageForm;
