import React from 'react';
import "../common/css/home-admin.css";
import Admin_banner from "../../assets/admin_banner.jpg";
import { EyeOutlined, DollarOutlined } from '@ant-design/icons';
import { Carousel, Table, Card, Col, Row } from 'antd';
import { Chart } from "react-google-charts";


const HomePageForm = () => {


    const columns = [

        {
            title: 'Ngày',
            dataIndex: 'date',
            key: 'date',
        },
        {
            title: 'ID',
            dataIndex: 'id',
            key: 'id',
        },
        {
            title: 'Trạng thái',
            dataIndex: 'status',
            key: 'status',
        },
        {
            title: 'Thành tiền',
            dataIndex: 'price',
            key: 'price',
        },
        {
            dataIndex: '',
            key: 'x',
            render: () => <a>Delete</a>,
        },
    ];
    const dataa = [
        {
            key: 0,
            date: '03/03/2024',
            id: 'ID546576745',
            status: 'Đã thanh toán',
            price: '170.000 VND',

        },
        {
            key: 1,
            date: '03/03/2024',
            id: 'ID546576745',
            status: 'Đã thanh toán',
            price: '170.000 VND',

        },
        {
            key: 2,
            date: '03/03/2024',
            id: 'ID546576745',
            status: 'Đã thanh toán',
            price: '170.000 VND',

        },
        {
            key: 3,
            date: '03/03/2024',
            id: 'ID546576745',
            status: 'Đã thanh toán',
            price: '170.000 VND',

        },
    ];
    const columnssp = [
        {
            title:'ID',
           dataIndex: 'id',
            key: 'id',
        },
        {
            title:'Tên',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title:'Màu',
            dataIndex: 'color',
            key: 'color',
        },
        {
            title:'Size',
            dataIndex: 'size',
            key: 'price',
        },
        {
            title:'Lượt mua',
            dataIndex: 'luotmua',
            key: 'luotmua',
        },
    ];
    const datasp = [
        {
            key: 0,
            id: 'ID134437',
            name: 'Gấu Teddy lông xoăn',
            color: 'Nâu',
            size: '35 cm',
            luotmua: 10,
        },
        {
            key: 1,
            id: 'ID134437',
            name: 'Gấu Teddy lông xoăn',
            color: 'Nâu',
            size: '35 cm',
            luotmua: 10,

        },
        {
            key: 2,
            id: 'ID134437',
            name: 'Gấu Teddy lông xoăn',
            color: 'Nâu',
            size: '35 cm',
            luotmua: 10,

        },
        {
            key: 3,
            id: 'ID134437',
            name: 'Gấu Teddy lông xoăn',
            color: 'Nâu',
            size: '35 cm',
            luotmua: 10,

        },
    ];
    const data = [
        ["Báo cáo", "Doanh thu"],
        ["Bút", 3],
        ["Gấu ",2 ],
        ["Thú bông", 3],
        ["Hoạt hình", 2],
       // CSS-style declaration
      ];
    const options = { 
        legend:"none",
        pieSliceText: "label",
        title: "Doanh thu",
        pieHole: 0.4, 
        pieStartAngle: 100,
      };

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
                <Col span={7}>
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
                <Col span={14} >
                    <Table pagination={false}
                        columns={columns}
                        expandable={{

                            rowExpandable: (record) => record.name !== 'Not Expandable',
                        }}
                        dataSource={dataa}
                        bordered
                        title={() => 'Đơn hàng mới nhất'}
                        
                    />
                    
                    <Table
                        pagination={false}
                        columns={columnssp}
                        expandable={{

                            rowExpandable: (record) => record.name !== 'Not Expandable',
                        }}
                        dataSource={datasp}
                        bordered
                        title={() => 'Sản phẩm bán chạy nhất'}
                    />
                </Col>
                <Col span={10}> 
                    <div className='chart'>
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