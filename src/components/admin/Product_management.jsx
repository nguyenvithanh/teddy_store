import React, {useEffect, useRef, useState} from 'react';
import {Badge, Form, notification, Spin} from 'antd';
import {Button, Input, Checkbox, Select, Upload} from 'antd';
import {InputNumber, Select as AntSelect} from 'antd';
import Logo from './images/logo.jpg'
import {DeleteOutlined, MinusCircleTwoTone} from "@ant-design/icons";
import categoryAPI from "../api/categoryAPI";
import sizeAPI from "../api/sizeAPI";
import colorAPI from "../api/colorAPI";
import productAPI from "../api/productAPI";

const {Option} = AntSelect;


const ProductPageForm = () => {
    // Danh sách các hình ảnh đã tải lên
    // const [loading, setLoading] = useState(false);
    // const [imagesList, setImagesList] = useState([]); // Mảng chứa URL của các hình ảnh để hiển thị
    // const [fileList, setFileList] = useState([]);   // Mảng chứa các file đã tải lên để gửi lên server

    // const [categoryList, setCategoryList] = useState([]);
    // const [sizeList, setSizeList] = useState([]);
    // const [colorList, setColorList] = useState([]);

    // const [productName, setProductName] = useState('');
    // const [productDescription, setProductDescription] = useState('');
    // const [productPrice, setProductPrice] = useState(0);
    // const [productQuantity, setProductQuantity] = useState(0);
    // const [selectedCategory, setSelectedCategory] = useState('');
    // const [selectedSize, setSelectedSize] = useState('');
    // const [selectedColor, setSelectedColor] = useState('');

    // const hiddenFileInput = useRef(null); // Sử dụng để tham chiếu đến input file ẩn

    // // Hàm này sẽ được gọi khi component được tạo lần đầu tiên
    // const initialAllList = async () => {
    //     // Lấy danh sách danh mục
    //     await categoryAPI.getAllActive().then((res) => {
    //         console.log(res);
    //         setCategoryList(res);
    //     });
    //     // Lấy danh sách kích thước
    //     await sizeAPI.getAllActive().then((res) => {
    //         setSizeList(res);
    //     });
    //     // Lấy danh sách màu sắc
    //     await colorAPI.getAllActive().then((res) => {
    //         setColorList(res);
    //     });
    // }
    // useEffect(() => {
    //     initialAllList().then(r => r);
    // }, []);

    // const handleUploadClick = () => {
    //     hiddenFileInput.current.click(); // Kích hoạt click trên input file ẩn
    // };

    // const handleFileChange = (e) => {
    //     const fileUploaded = e.target.files[0];
    //     if (fileUploaded) {
    //         const newImageList = [...imagesList, URL.createObjectURL(fileUploaded)];
    //         const newFileList = [...fileList, fileUploaded]; // Thêm file vào mảng

    //         setImagesList(newImageList);
    //         setFileList(newFileList); // Cập nhật state với mảng file mới
    //     }
    // };
    // const deleteImage = (index) => {
    //     // Tạo một bản sao mới của mảng và loại bỏ phần tử tại vị trí chỉ mục
    //     const newImagesList = imagesList.filter((_, imgIndex) => imgIndex !== index);
    //     // Cập nhật state với mảng mới
    //     setImagesList(newImagesList);
    // }

    // const handleReset = () => {
    //     setImagesList([]);
    //     setFileList([]);
    //     setProductName('');
    //     setProductDescription('');
    //     setProductPrice(0);
    //     setProductQuantity(0);
    //     setSelectedCategory('');
    //     setSelectedSize('');
    //     setSelectedColor('');
    // }


    // // Hàm này sẽ được gọi khi người dùng nhấn nút "Lưu"
    // const handleSave = () => {
    //     setLoading(true);
    //     const formData = new FormData();
    //     fileList.forEach(file => {
    //         formData.append('images', file); // Thêm mỗi file vào FormData
    //     });
    //     formData.append('name', productName);
    //     formData.append('description', productDescription);
    //     formData.append('price', productPrice);
    //     formData.append('quantity', productQuantity);
    //     formData.append('idCate', selectedCategory);
    //     formData.append('idSize', selectedSize);
    //     formData.append('idColor', selectedColor);
    //     productAPI.updateProduct(formData).then((res) => {
    //         setLoading(false);
    //         if (res === 'OK') {
    //             notification.success({
    //                 message: "Thêm sản phẩm thành công",
    //                 placement: 'bottomRight',
    //                 duration: 1
    //             });
    //             handleReset();
    //         } else {
    //             notification.error({
    //                 message: "Thêm sản phẩm thất bại",
    //                 placement: 'bottomRight',
    //                 duration: 1
    //             });
    //         }
    //     });
    // }

    // return (
    //     <Form title="Trang chủ">
    //         <Form.Item>

    //             <div className="container mt-4 text-color">
    //                 <h5 className='fw-bold'>Thông tin sản phẩm</h5>
    //                 <form>
    //                     <div className="mb-3 pt-3">
    //                         <label htmlFor="productImage" className="form-label">Hình ảnh sản phẩm</label>
    //                         <div className="d-flex align-items-center"> {/* Sử dụng flexbox để căn chỉnh các phần tử */}
    //                             {imagesList.map((image, index) => (
    //                                 <Badge key={index} count={<MinusCircleTwoTone/>}
    //                                        onClick={() => deleteImage(index)} className="remove-image me-4">
    //                                     <img src={image} className="btn-add-img" alt="preview"/>
    //                                 </Badge>
    //                             ))}

    //                             <button type="button" className="form-control btn-add-img"
    //                                     onClick={handleUploadClick}
    //                             >
    //                                 <i className="fa-solid fa-plus"></i>
    //                                 Thêm hình ảnh
    //                             </button>
    //                             <input type="file" style={{display: 'none'}} ref={hiddenFileInput}
    //                                    accept="image/*"
    //                                    onChange={handleFileChange}/>
    //                         </div>
    //                     </div>


    //                     <div className="mb-3">
    //                         <label className="form-label">Tên sản phẩm</label>
    //                         <input className="form-control input"
    //                                value={productName}
    //                                onChange={(e) => setProductName(e.target.value)}
    //                         />
    //                     </div>

    //                     <div className="mb-3">
    //                         <label className="form-label">Mô tả</label>
    //                         <textarea rows="5" className="form-control input"
    //                                   value={productDescription}
    //                                   onChange={(e) => setProductDescription(e.target.value)}
    //                         ></textarea>
    //                     </div>

    //                     <div className="mb-3 row">
    //                         <div className="col-md-4">
    //                             <div className="mb-3">
    //                                 <label className="form-label">Giá </label>
    //                                 <InputNumber className="form-control input" placeholder="990.000"
    //                                              value={productPrice}
    //                                              min={0}
    //                                              step={0.1}
    //                                              onChange={(e) => setProductPrice(e)}
    //                                 />
    //                             </div>
    //                             <div className="mb-3">
    //                                 <label className="form-label">Màu: </label>
    //                                 <Select className="form-control input" id="colorSelect"
    //                                         value={selectedColor}
    //                                         onChange={(value) => setSelectedColor(value)}
    //                                 >
    //                                     <Select.Option value="">Chọn màu</Select.Option>
    //                                     {colorList.map((c, index) => (
    //                                         <Select.Option key={index} value={c.id}>{c.color}</Select.Option>
    //                                     ))}
    //                                 </Select>
    //                             </div>
    //                         </div>
    //                         <div className="col-md-4">
    //                             <div className="mb-4">
    //                                 <label className="form-label" style={{marginBottom: '5px', display: 'block'}}>Số
    //                                     lượng</label>
    //                                 <InputNumber min={0} // Đặt giá trị nhỏ nhất là 0, dùng số thay vì chuỗi
    //                                              className="form-control input"
    //                                              style={{height: '38px', fontSize: '14px', padding: '4px'}}
    //                                              value={productQuantity}
    //                                              onChange={(value) => setProductQuantity(value)} // Cập nhật giá trị state
    //                                              step={1} // Đảm bảo chỉ có thể tăng hoặc giảm số nguyên
    //                                 />
    //                             </div>
    //                             <div className="mb-3">
    //                                 <label htmlFor="colorSelect" className="form-label">Size</label>
    //                                 <Select className="form-control input" id="colorSelect"
    //                                         value={selectedSize}
    //                                         onChange={(value) => setSelectedSize(value)}
    //                                 >
    //                                     <Select.Option value="">Chọn size</Select.Option>
    //                                     {sizeList.map((size, index) => (
    //                                         <Select.Option key={index} value={size.id}>{size.size_no}</Select.Option>
    //                                     ))}
    //                                 </Select>
    //                             </div>
    //                         </div>
    //                         <div className="col-md-4">
    //                             <div className="mb-4">
    //                                 <label className="form-label" style={{marginBottom: '5px', display: 'block'}}>Danh
    //                                     mục</label>
    //                                 <Select className="form-control input" id="colorSelect"
    //                                         value={selectedCategory}
    //                                         onChange={(value) => setSelectedCategory(value)}
    //                                 >
    //                                     <Select.Option value="">Chọn danh mục</Select.Option>
    //                                     {categoryList.map((size, index) => (
    //                                         <Select.Option key={index} value={size.id}>{size.name}</Select.Option>
    //                                     ))}
    //                                 </Select>
    //                             </div>
    //                         </div>
    //                     </div>

    //                     <div className="mb-3">
    //                         <Button type="primary" className="me-2 button-action "
    //                                 onClick={handleSave}
    //                         >
    //                             Lưu
    //                         </Button>
    //                         <Button type="primary" className="button-action">
    //                             Làm mới
    //                         </Button>
    //                     </div>
    //                 </form>
    //             </div>
    //         </Form.Item>
    //         <Spin spinning={loading} fullscreen={true} />
    //     </Form>
    // );
};


export default ProductPageForm;