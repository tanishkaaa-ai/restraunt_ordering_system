import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import axios from "axios";
import api from "../../utils/api";
const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [form, setForm] = useState({
    email: "",
    password: "",
    role: "customer",
  });

  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const res = await api.post("/auth/login", form);

    const { token, user } = res.data;

    // Save to AuthContext
    login(token, user.role, user);

    // Redirect based on role
    if (user.role === "customer") navigate("/menu");
    if (user.role === "admin") navigate("/admin");
    if (user.role === "chef") navigate("/chef");
    if (user.role === "delivery") navigate("/delivery");
  } catch (err) {
    alert("Login failed");
  }
};


  return (
   <div className="min-h-screen bg-gradient-to-br from-[#FFE5D4] via-[#FFD6C9] to-[#FFBFA8] flex items-center justify-center">

      <div className="bg-white shadow-2xl rounded-3xl p-10 w-full max-w-md text-center">

        <h1 className="text-3xl font-bold text-gray-800 mb-6">Welcome Back</h1>

        <form onSubmit={handleSubmit} className="space-y-4">

          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 border rounded-xl shadow-sm"
            value={form.email}
            onChange={(e) =>
              setForm({ ...form, email: e.target.value })
            }
            required
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 border rounded-xl shadow-sm"
            value={form.password}
            onChange={(e) =>
              setForm({ ...form, password: e.target.value })
            }
            required
          />

          {/* ROLE SELECTOR */}
          <select
            className="w-full p-3 border rounded-xl shadow-sm"
            value={form.role}
            onChange={(e) =>
              setForm({ ...form, role: e.target.value })
            }
          >
            <option value="customer">Customer</option>
            <option value="chef">Chef</option>
            <option value="delivery">Delivery Agent</option>
            <option value="admin">Admin</option>
          </select>

          <button
            type="submit"
            className="w-full bg-orange-600 text-white py-3 font-semibold rounded-xl hover:bg-orange-700 shadow-lg"
          >
            Login
          </button>

        </form>

        <p className="mt-4 text-gray-600">
          Don’t have an account?
          <span
            onClick={() => navigate("/signup")}
            className="text-orange-600 cursor-pointer font-semibold ml-2"
          >
            Sign Up
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
