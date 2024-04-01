import React, {useEffect, useState} from 'react';
import {Form, Select, Input, Button, Table, Carousel, Image, Popconfirm, notification, Pagination} from 'antd';
import {DeleteOutlined} from '@ant-design/icons';
// import Logo from './images/logo.jpg'
import productAPI from "../api/productAPI";

const {Option} = Select;

const AllProductPageForm = () => {
    const [page, setPage] = useState(0);
    const [size, setSize] = useState(10);
    const [total, setTotal] = useState(0);
    const [listProduct, setListProduct] = useState([]);
    const [search, setSearch] = useState('');
    const handlePageChange = (newPage) => {
        setPage(newPage);
    };
    const handleSizeChange = (value) => {
        setSize(value);
        setPage(0);
    };
    const fetchListProduct = async () => {
        try {
            const response = await productAPI.getAll(page, size);
            setListProduct(response?.content || []);
            setTotal(response?.totalElements);
        } catch (error) {
            console.log('Failed to fetch product list: ', error);
        }
    }
    useEffect(() => {
        fetchListProduct().then(r => r);
    }, [page, size]);
    const vietNameCurrencyFormat = (price) => {
        return new Intl.NumberFormat('vi-VN', {style: 'currency', currency: 'VND'}).format(price);
    }
    const onShowSizeChange = (current, pageSize) => {
        setPage(current - 1);
        setSize(pageSize);
    };
    const onPageChange = (page, pageSize) => {
        setPage(page - 1);
    };

    const handleSearch = async () => {
        try {
            const response = await productAPI.searchProduct(search);
            setListProduct(response?.content || []);
            setTotal(response?.totalElements);
        } catch (error) {
            console.log('Failed to fetch product list: ', error);
        }
    }
    const handleDelete = async (record) => {
        try {
            await productAPI.deleteProduct(record.id).then(r => {
                if (r === 'OK') {
                    notification.success({
                        message: 'Xóa sản phẩm thành công',
                        duration: 1
                    });
                } else {
                    notification.error({
                        message: 'Xóa sản phẩm thất bại',
                        duration: 1
                    });
                }
            });
            fetchListProduct().then(r => r);
        } catch (error) {
            console.log('Failed to delete product: ', error);
        }
    }

    return (<Form title="Trang chủ">
        <Form.Item>

            <div className="mt-4 text-color">
                <div className="container">
                    <h5>Tất cả sản phẩm</h5>
                    <div className="d-flex justify-content-between mt-4">
                        <div className="mb-3 d-flex align-items-center justify-content-between "
                             style={{color: '#714708'}}>
                            <span>Hiển thị</span>
                            <Select className="input-option" id="displaySelect" style={{width: '80px'}}
                                    defaultValue="10"
                                    onChange={handleSizeChange}>
                                <Select.Option value={10}>10</Select.Option>
                                <Select.Option value={9}>9</Select.Option>
                                <Select.Option value={8}>8</Select.Option>
                                <Select.Option value={7}>7</Select.Option>
                            </Select>
                            <span>mục</span>
                        </div>
                        <div className="d-flex">
                            <div className="me-2">
                                <Input type="text" className="form-control input"
                                    value={search}
                                    onChange={(e) => setSearch(e.target.value)}
                                />
                            </div>
                            <div>
                                <Button type="submit" className="btn text-white rounded-3"
                                        onClick={handleSearch}
                                        style={{backgroundColor: '#644c38'}}>
                                    <i className="fa-solid fa-magnifying-glass"></i>
                                </Button>
                            </div>
                        </div>
                    </div>
                    {/* table */}
                    <Table className="table text-center align-middle" dataSource={listProduct} pagination={false}>
                        <Table.Column title="ID" dataIndex="id" key="id"/>
                        <Table.Column
                            title="Tên"
                            dataIndex="name"
                            key="name"
                        />
                        <Table.Column
                            title="Mô tả"
                            dataIndex="description"
                            key="description"
                        />
                        <Table.Column
                            title="Loại sản phẩm"
                            dataIndex="category"
                            key="size"
                            render={(text, record) => (
                                <div className="d-flex wrapped">
                                    <p className="wrapped">{record.category.name}</p>
                                </div>
                            )}
                        />
                        <Table.Column
                            title="Size gấu"
                            dataIndex="detailsProduct"
                            key="price"
                            render={(text, record) => (
                                <div className="d-flex wrapped">
                                    <p className="wrapped">{record.detailsProduct[0].size.size_no}</p>
                                </div>
                            )}
                        />
                        <Table.Column
                            title="Màu gấu"
                            dataIndex="detailsProduct"
                            key="discount"
                            render={(text, record) => (
                                <div className="d-flex wrapped">
                                    <p className="wrapped">{record.detailsProduct[0].color.color}</p>
                                </div>
                            )}
                        />
                        <Table.Column
                            title="Giá gốc"
                            dataIndex="quantity"
                            key="quantity"
                            render={(text, record) => (
                                <div className="d-flex wrapped">
                                    <p className="wrapped">{vietNameCurrencyFormat(record.detailsProduct[0].price)}</p>
                                </div>
                            )}
                        />
                        <Table.Column
                            title="Số lượng"
                            dataIndex="description"
                            key="description"
                            render={(text, record) => (
                                <div className="d-flex wrapped">
                                    <p className="wrapped">{record.detailsProduct[0].quantity}</p>
                                </div>
                            )}
                        />
                        <Table.Column
                            title="Hình ảnh"
                            dataIndex="productImages"
                            key="productImages"
                            render={(text, record) => (
                                <div className="d-flex flex-row overflow-auto" style={{maxWidth: '150px'}}>
                                    <Image.PreviewGroup
                                        preview={{
                                            onChange: (current, prev) =>
                                                console.log(`current index: ${current}, prev index: ${prev}`),
                                        }}
                                    >
                                        {record.productImages.map((image, index) => (
                                            <Image
                                                width={50}
                                                height={50}
                                                src={image.img_url}
                                            />
                                        ))}
                                    </Image.PreviewGroup>
                                </div>
                            )}
                        />

                        <Table.Column
                            title="Trạng thái"
                            key="active"
                            render={(text, record) => (
                                <div className="d-flex wrapped">
                                    <p className="wrapped">{record.active ? 'Hiển thị' : 'Ẩn'}</p>
                                </div>
                            )}
                        />

                        <Table.Column
                            title="Chỉnh sửa"
                            key="action"
                            render={(text, record) => (<span>
                                <Popconfirm
                                    placement="top"
                                    title='Bạn có chắc chắn muốn xóa?'
                                    description={'Xóa sản phẩm'}
                                    okText="Đồng ý"
                                    cancelText="Hủy"
                                    onConfirm={() => handleDelete(record)}
                                >
                                        <a href="#" style={{color: '#644c38'}}>
                                            <DeleteOutlined style={{width: '10px', height: '10px'}}/>
                                        </a>
                                </Popconfirm>
                                    </span>)}
                        />
                    </Table>
                    <Pagination
                        showSizeChanger
                        onShowSizeChange={onShowSizeChange}
                        onChange={onPageChange}
                        showTotal={(total, range) => `${range[0]}-${range[1]} of ${total} items`}
                        defaultCurrent={page}
                        total={total}
                    />
                </div>
            </div>

        </Form.Item>
    </Form>);
};


export default AllProductPageForm;