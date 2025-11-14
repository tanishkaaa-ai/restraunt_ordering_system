import { useState, useContext } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

export default function StaffAuth() {
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);
  const { search } = useLocation();
  
  const role = new URLSearchParams(search).get("role"); // admin/chef/delivery
  
  const [isSignup, setIsSignup] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", pass: "" });

  const handleSubmit = (e) => {
    e.preventDefault();

    login({
      role: role,
      name: form.name,
      email: form.email,
    });

    navigate(`/staff/${role}`);
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 px-6">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-3xl shadow-2xl w-full max-w-md space-y-6"
      >
        <h2 className="text-3xl font-extrabold text-center text-gray-800">
          {isSignup ? "Staff Sign Up" : "Staff Login"}
        </h2>

        <p className="text-center text-gray-600 capitalize mb-4">
          Role: {role}
        </p>

        {isSignup && (
          <input
            placeholder="Full Name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="w-full p-3 border rounded-lg"
          />
        )}

        <input
          placeholder="Email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className="w-full p-3 border rounded-lg"
        />

        <input
          type="password"
          placeholder="Password"
          value={form.pass}
          onChange={(e) => setForm({ ...form, pass: e.target.value })}
          className="w-full p-3 border rounded-lg"
        />

        <button className="w-full py-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-lg font-semibold hover:scale-105 transition">
          {isSignup ? "Create Account" : "Login"}
        </button>

        <div className="text-center text-sm text-gray-700">
          {isSignup ? (
            <p>
              Already have an account?{" "}
              <button
                type="button"
                onClick={() => setIsSignup(false)}
                className="text-purple-600 font-semibold"
              >
                Login
              </button>
            </p>
          ) : (
            <p>
              New staff?{" "}
              <button
                type="button"
                onClick={() => setIsSignup(true)}
                className="text-purple-600 font-semibold"
              >
                Sign Up
              </button>
            </p>
          )}
        </div>
      </form>
    </div>
  );
}
