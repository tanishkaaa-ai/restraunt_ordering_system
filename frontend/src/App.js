import { BrowserRouter, Routes, Route } from "react-router-dom";

/* Layout */
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

/* Pages */
import Landing from "./pages/Home/Landing";
import UserTypeSelect from "./pages/Login/UserTypeSelect";
import CustomerLogin from "./pages/Login/CustomerLogin";
import CustomerRegister from "./pages/Register/CustomerRegister";
import StaffPortal from "./pages/Login/StaffPortal";
import AdminLogin from "./pages/Login/AdminLogin";
import ChefLogin from "./pages/Login/ChefLogin";
import DeliveryLogin from "./pages/Login/DeliveryLogin";
import Menu from "./pages/Menu/Menu";
import Cart from "./pages/Cart/Cart";
import Checkout from "./pages/Checkout/Checkout";
import TrackOrder from "./pages/TrackOrder/TrackOrder";

/* Dashboards */
import AdminDashboard from "./pages/Admin/AdminDashboard";
import ChefDashboard from "./pages/Admin/ChefDashboard";
import DeliveryDashboard from "./pages/Admin/DeliveryDashboard";

export default function App(){
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Landing/>} />
            <Route path="/select" element={<UserTypeSelect/>} />
            <Route path="/login" element={<CustomerLogin/>} />
            <Route path="/register/customer" element={<CustomerRegister/>} />
            <Route path="/staff" element={<StaffPortal/>} />
            <Route path="/admin/login" element={<AdminLogin/>} />
            <Route path="/chef/login" element={<ChefLogin/>} />
            <Route path="/delivery/login" element={<DeliveryLogin/>} />

            <Route path="/menu" element={<Menu/>} />
            <Route path="/cart" element={<Cart/>} />
            <Route path="/checkout" element={<Checkout/>} />
            <Route path="/track" element={<TrackOrder/>} />

            <Route path="/admin" element={<AdminDashboard/>} />
            <Route path="/chef" element={<ChefDashboard/>} />
            <Route path="/delivery" element={<DeliveryDashboard/>} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
