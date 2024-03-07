import React from "react";
import Index from "./components/user/index.jsx";
import Register from "./components/user/register.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/user/Login.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />}></Route>
        <Route path="/teddy-store/login" element={<Login />}></Route>
        <Route path="/teddy_store/register" element={<Register/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
