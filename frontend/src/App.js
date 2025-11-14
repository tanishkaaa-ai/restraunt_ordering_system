import React from "react";
import { Routes, Route } from "react-router-dom";

// Layout Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Pages
import Landing from "./pages/Home/Landing";
import CustomerRegister from "./pages/Register/CustomerRegister";
import CustomerLogin from "./pages/Login/CustomerLogin";

import AdminLogin from "./pages/Login/AdminLogin";
import ChefLogin from "./pages/Login/ChefLogin";
import DeliveryLogin from "./pages/Login/DeliveryLogin";

import StaffPortal from "./pages/Login/StaffPortal";

import Menu from "./pages/Menu/Menu";
import Cart from "./pages/Cart/Cart";
import Checkout from "./pages/Checkout/Checkout";
import Orders from "./pages/Orders/Orders";
import TrackOrder from "./pages/TrackOrder/TrackOrder";

// Protected Route
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <>
      <Navbar />

      <Routes>

        {/* Home / Landing Page */}
        <Route path="/" element={<Landing />} />

        {/* Customer Auth */}
        <Route path="/register" element={<CustomerRegister />} />
        <Route path="/login" element={<CustomerLogin />} />

        {/* Staff Portal */}
        <Route path="/staff" element={<StaffPortal />} />
        <Route path="/staff/admin" element={<AdminLogin />} />
        <Route path="/staff/chef" element={<ChefLogin />} />
        <Route path="/staff/delivery" element={<DeliveryLogin />} />

        {/* Customer Pages - Protected */}
        <Route
          path="/menu"
          element={
            <ProtectedRoute>
              <Menu />
            </ProtectedRoute>
          }
        />

        <Route
          path="/cart"
          element={
            <ProtectedRoute>
              <Cart />
            </ProtectedRoute>
          }
        />

        <Route
          path="/checkout"
          element={
            <ProtectedRoute>
              <Checkout />
            </ProtectedRoute>
          }
        />

        <Route
          path="/orders"
          element={
            <ProtectedRoute>
              <Orders />
            </ProtectedRoute>
          }
        />

        <Route
          path="/track"
          element={
            <ProtectedRoute>
              <TrackOrder />
            </ProtectedRoute>
          }
        />

      </Routes>

      <Footer />
    </>
  );
}

export default App;
