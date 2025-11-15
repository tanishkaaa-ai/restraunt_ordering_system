import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { API_URL } from "../../utils/api";

const Signup = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    role: "customer",
  });

  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    await axios.post(`${API_URL}/auth/register`, form);
    alert("Account created!");
    navigate("/login");
  } catch (err) {
    alert("Signup failed");
  }
};

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-200 via-indigo-200 to-purple-200 flex items-center justify-center">
      <div className="bg-white p-10 rounded-3xl shadow-2xl w-full max-w-md text-center">

        <h1 className="text-3xl font-bold text-gray-800 mb-6">Create Account</h1>

        <form onSubmit={handleSubmit} className="space-y-4">

          <input
            type="text"
            placeholder="Full Name"
            className="w-full p-3 border rounded-xl shadow-sm"
            value={form.name}
            onChange={(e) =>
              setForm({ ...form, name: e.target.value })
            }
            required
          />

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

          {/* ROLE SELECT */}
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
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold shadow-lg"
            type="submit"
          >
            Sign Up
          </button>
        </form>

        <p className="mt-4 text-gray-600">
          Already have an account?
          <span
            onClick={() => navigate("/login")}
            className="text-blue-600 cursor-pointer font-semibold ml-2"
          >
            Login
          </span>
        </p>

      </div>
    </div>
  );
};

export default Signup;
