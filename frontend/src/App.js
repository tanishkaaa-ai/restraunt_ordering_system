import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Landing
import Landing from "./pages/Home/Landing";

// Role selection
import UserTypeSelect from "./pages/Login/UserTypeSelect";

// Customer Authentication
import CustomerAuth from "./pages/Login/CustomerAuth";
import CustomerLogin from "./pages/Login/CustomerLogin";
import CustomerSignup from "./pages/Login/CustomerSignup";

// Staff Login Pages
import StaffPortal from "./pages/Login/StaffPortal";
import AdminLogin from "./pages/Login/AdminLogin";
import ChefLogin from "./pages/Login/ChefLogin";
import DeliveryLogin from "./pages/Login/DeliveryLogin";

// Customer Pages (protected)
import Menu from "./pages/Menu/Menu";
import Cart from "./pages/Cart/Cart";
import Checkout from "./pages/Checkout/Checkout";
import TrackOrder from "./pages/TrackOrder/TrackOrder";
import Orders from "./pages/Orders/Orders";

// Protected Route
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <>
      <Navbar />

      <Routes>

        {/* Landing */}
        <Route path="/" element={<Landing />} />

        {/* Role Selection */}
        <Route path="/select" element={<UserTypeSelect />} />

        {/* Customer Flow */}
        <Route path="/customer-auth" element={<CustomerAuth />} />
        <Route path="/login" element={<CustomerLogin />} />
        <Route path="/signup" element={<CustomerSignup />} />

        {/* Staff Flow */}
        <Route path="/staff" element={<StaffPortal />} />
        <Route path="/staff/admin" element={<AdminLogin />} />
        <Route path="/staff/chef" element={<ChefLogin />} />
        <Route path="/staff/delivery" element={<DeliveryLogin />} />

        {/* PROTECTED CUSTOMER ROUTES */}
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
