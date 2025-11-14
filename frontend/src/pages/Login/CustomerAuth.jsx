import { Link } from "react-router-dom";

export default function CustomerAuth() {
  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-br from-orange-500 via-pink-500 to-purple-600 px-6 py-12">

      <div className="bg-white/20 backdrop-blur-xl p-12 rounded-3xl shadow-2xl max-w-3xl w-full border border-white/30">

        <h1 className="text-5xl font-extrabold text-center text-white drop-shadow mb-10">
          Customer Access
        </h1>

        <p className="text-center text-white/90 text-lg mb-12">
          Sign Up to enjoy delicious food 🥗🍝🍔
        </p>

        <div className="grid md:grid-cols-2 gap-10">

          {/* LOGIN CARD */}
          <Link
            to="/login"
            className="bg-white p-10 rounded-3xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all cursor-pointer flex flex-col items-center"
          >
            <div className="text-6xl mb-4 text-blue-600">🔐</div>

            <h2 className="text-3xl font-bold text-gray-800 mb-2">
              Login
            </h2>

            <p className="text-gray-600 text-center text-lg">
              Access your account and order food.
            </p>
          </Link>

          {/* SIGNUP CARD */}
          <Link
            to="/signup"
            className="bg-white p-10 rounded-3xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all cursor-pointer flex flex-col items-center"
          >
            <div className="text-6xl mb-4 text-green-600">📝</div>

            <h2 className="text-3xl font-bold text-gray-800 mb-2">
              Sign Up
            </h2>

            <p className="text-gray-600 text-center text-lg">
              Create your account and start ordering.
            </p>
          </Link>

        </div>
      </div>
    </div>
  );
}
