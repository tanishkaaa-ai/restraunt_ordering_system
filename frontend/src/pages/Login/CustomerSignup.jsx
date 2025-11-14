import { useState, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function CustomerSignup() {
  const [form, setForm] = useState({ name: "", email: "", pass: "" });
  const { login } = useContext(AuthContext);
  const nav = useNavigate();

  const submit = (e) => {
    e.preventDefault();

    login({ role: "customer", email: form.email, name: form.name });

    nav("/menu");
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-orange-500 to-red-600">
      <form
        onSubmit={submit}
        className="bg-white p-8 rounded-2xl w-96 shadow-xl space-y-5"
      >
        <h2 className="text-3xl font-bold text-center text-gray-800">
          Customer Sign Up
        </h2>

        <input
          placeholder="Full Name"
          className="w-full p-3 border rounded-lg"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />

        <input
          placeholder="Email"
          className="w-full p-3 border rounded-lg"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 border rounded-lg"
          value={form.pass}
          onChange={(e) => setForm({ ...form, pass: e.target.value })}
          />

        <button
          className="w-full py-3 rounded-lg text-white font-bold bg-gradient-to-r from-red-500 to-orange-500 hover:scale-105 transition"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
}
