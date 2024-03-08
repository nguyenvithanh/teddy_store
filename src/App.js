import React from "react";
import Index from "./components/user/index.jsx";
 
import DetailProduct from "./components/user/Detail_Product.jsx";
import IndexAdmin from "./components/admin/index.jsx";
 
import Register from "./components/user/register.jsx"; 
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />}></Route> 
        <Route path="/detail_product" element={<DetailProduct/>}></Route> 
        <Route path="/admin" element={<IndexAdmin/>}></Route> 
        <Route path="/teddy_store/register" element={<Register/>}></Route> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;
