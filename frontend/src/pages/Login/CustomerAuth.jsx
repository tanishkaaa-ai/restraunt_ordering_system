import { Link } from "react-router-dom";

export default function CustomerAuth() {
  return (
    <div className="max-w-md mx-auto p-10">
      <h2 className="text-3xl font-bold mb-8">Customer Access</h2>

      <div className="space-y-6">
        <Link
          to="/login"
          className="block bg-gradient-to-r from-orange-500 to-red-500 text-white py-4 rounded-xl text-center text-lg font-semibold shadow hover:scale-105 transition"
        >
          Login
        </Link>

        <Link
          to="/signup"
          className="block bg-white border border-orange-500 text-orange-600 py-4 rounded-xl text-center text-lg font-semibold shadow hover:scale-105 transition"
        >
          Sign Up
        </Link>
      </div>
    </div>
  );
}
