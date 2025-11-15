import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [form, setForm] = useState({
    email: "",
    password: "",
    role: "customer",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    login("fake-token", form.role);

    if (form.role === "customer") navigate("/menu");
    if (form.role === "chef") navigate("/chef");
    if (form.role === "delivery") navigate("/delivery");
    if (form.role === "admin") navigate("/admin");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-200 via-yellow-200 to-amber-200 flex items-center justify-center">
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
