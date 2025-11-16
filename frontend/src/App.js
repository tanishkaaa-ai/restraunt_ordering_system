import React from "react";
import { Routes, Route } from "react-router-dom";  // NO Router here

/* COMPONENTS */
import Navbar from "./components/Navbar";
import ProtectedRoute from "./components/ProtectedRoute";

/* COMMON CONTEXT */
import { AuthProvider } from "./context/AuthContext";

/* COMMON PAGES */
import Landing from "./pages/common/Landing";
import Profile from "./pages/common/Profile";

/* AUTH PAGES */
import SelectRole from "./pages/auth/SelectRole";
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";

/* CUSTOMER */
import CustomerAccess from "./pages/customer/CustomerAccess";
import Menu from "./pages/customer/Menu";
import Cart from "./pages/customer/Cart";
import Checkout from "./pages/customer/Checkout";
import Orders from "./pages/customer/Orders";
import TrackOrder from "./pages/customer/TrackOrder";

/* CHEF */
import ChefDashboard from "./pages/chef/ChefDashboard";
import ChefOrders from "./pages/chef/ChefOrders";

/* DELIVERY */
import DeliveryOrders from "./pages/delivery/DeliveryOrders";

/* ADMIN */
import AdminDashboard from "./pages/Admin/AdminDashboard";
import ManageMenu from "./pages/Admin/ManageMenu";
import AdminOrders from "./pages/Admin/AdminOrders";
import UsersList from "./pages/Admin/UsersList";
import MenuForm from "./pages/Admin/MenuForm";

function App() {
  return (
    <AuthProvider>

      {/* Navbar is always visible */}
      <Navbar />

      <Routes>

        {/* PUBLIC ROUTES */}
        <Route path="/" element={<Landing />} />
        <Route path="/choose-role" element={<SelectRole />} />

        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* Public menu (view only) */}
        <Route path="/menu" element={<Menu />} />

        {/* CUSTOMER ROUTES */}
        <Route
          path="/customer"
          element={
            <ProtectedRoute allowedRoles={["customer"]}>
              <CustomerAccess />
            </ProtectedRoute>
          }
        />

        <Route
          path="/cart"
          element={
            <ProtectedRoute allowedRoles={["customer"]}>
              <Cart />
            </ProtectedRoute>
          }
        />

        <Route
          path="/checkout"
          element={
            <ProtectedRoute allowedRoles={["customer"]}>
              <Checkout />
            </ProtectedRoute>
          }
        />

        <Route
          path="/orders"
          element={
            <ProtectedRoute allowedRoles={["customer"]}>
              <Orders />
            </ProtectedRoute>
          }
        />

        <Route
          path="/track"
          element={
            <ProtectedRoute allowedRoles={["customer"]}>
              <TrackOrder />
            </ProtectedRoute>
          }
        />

        {/* CHEF ROUTES */}
        <Route
          path="/chef"
          element={
            <ProtectedRoute allowedRoles={["chef"]}>
              <ChefDashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/chef/orders"
          element={
            <ProtectedRoute allowedRoles={["chef"]}>
              <ChefOrders />
            </ProtectedRoute>
          }
        />

        {/* DELIVERY ROUTES */}
        <Route
          path="/delivery"
          element={
            <ProtectedRoute allowedRoles={["delivery"]}>
              <DeliveryOrders />
            </ProtectedRoute>
          }
        />

        <Route
          path="/delivery/orders"
          element={
            <ProtectedRoute allowedRoles={["delivery"]}>
              <DeliveryOrders />
            </ProtectedRoute>
          }
        />

        {/* ADMIN ROUTES */}
        <Route
          path="/admin"
          element={
            <ProtectedRoute allowedRoles={["admin"]}>
              <AdminDashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/menu"
          element={
            <ProtectedRoute allowedRoles={["admin"]}>
              <ManageMenu />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/add-item"
          element={
            <ProtectedRoute allowedRoles={["admin"]}>
              <MenuForm />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/edit/:id"
          element={
            <ProtectedRoute allowedRoles={["admin"]}>
              <MenuForm />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/orders"
          element={
            <ProtectedRoute allowedRoles={["admin"]}>
              <AdminOrders />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/users"
          element={
            <ProtectedRoute allowedRoles={["admin"]}>
              <UsersList />
            </ProtectedRoute>
          }
        />
        <Route
           path="/profile"
           element={
              <ProtectedRoute allowedRoles={["customer","admin","chef","delivery"]}>
                <Profile />
              </ProtectedRoute>
            }
        />

      </Routes>
    </AuthProvider>
  );
}

export default App;
