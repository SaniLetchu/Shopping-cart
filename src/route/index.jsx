import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ShopPage from "../pages/ShopPage";

function RouteSwitch() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Shopping-cart" element={<HomePage />} />
        <Route path="/Shopping-cart/products" element={<ShopPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RouteSwitch;
