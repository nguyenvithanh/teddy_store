import React from "react";
import Index from "./components/user/index.jsx";
import Register from "./components/user/register.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeAdmin from "./components/admin/HomeAdmin.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />}></Route>
        <Route path="/teddy-store/homePage" element={<Index />}></Route>
        <Route path="/teddy-store/login" element={<Login />}></Route>
        <Route path="/teddy-store/cart" element={<Cart />}></Route>
        <Route path="/teddy_store/register" element={<Register />}></Route>
        <Route path="/teddy_store/admin" element={<HomeAdmin />}></Route>
        <Route
          path="/teddy_store/admin/product_management"
          element={<HomeAdmin />}
        ></Route>
        <Route
          path="/teddy_store/admin/manage_size_and_color "
          element={<HomeAdmin />}
        ></Route>
        <Route
          path="/teddy_store/admin/manage_product_categories "
          element={<HomeAdmin />}
        ></Route>
        <Route
          path="/teddy_store/admin/manage_size_and_color "
          element={<HomeAdmin />}
        ></Route>
        <Route
          path="/teddy_store/admin/all_product "
          element={<HomeAdmin />}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
