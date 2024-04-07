import React from "react";
import Index from "./components/user/index.jsx";
import DetailProduct from "./components/user/Detail_Product.jsx";
import IndexAdmin from "./components/admin/HomeAdmin.jsx";
import Cart from "./components/user/Cart.jsx"
import Register from "./components/user/register.jsx"; 
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login.jsx";
import Checkout from "./components/user/Checkout.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />}></Route>
        <Route path="/teddy-store/homePage" element={<Index />}></Route>
        <Route path="/teddy-store/admin" element={<IndexAdmin/>}></Route>
        <Route path="/teddy-store/detail_products/:id" element={<DetailProduct/>}></Route>
        <Route path="/teddy-store/login" element={<Login />}></Route>
        <Route path="/teddy-store/cart" element={<Cart />}></Route>
        <Route path="/teddy-store/register" element={<Register/>}></Route>
        <Route path="/teddy-store/checkout" element={<Checkout />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
