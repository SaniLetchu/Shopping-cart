import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ShopPage from "../pages/ShopPage";

function RouteSwitch() {
  return (
    <BrowserRouter basename="/shopping-cart">
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/products" element={<ShopPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RouteSwitch;
