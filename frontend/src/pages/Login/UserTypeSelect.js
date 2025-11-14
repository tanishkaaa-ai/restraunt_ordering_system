import { Link } from "react-router-dom";

export default function UserTypeSelect() {
  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-br from-orange-500 via-pink-500 to-purple-600 px-6 py-10">

      <div className="bg-white/20 backdrop-blur-xl p-12 rounded-3xl shadow-2xl max-w-4xl w-full border border-white/30">
        
        <h1 className="text-5xl font-extrabold text-center text-white drop-shadow mb-12">
          Select Your Role
        </h1>

        <div className="grid md:grid-cols-2 gap-10">

          {/* CUSTOMER CARD */}
          <Link
            to="/customer-auth"
            className="bg-white p-10 rounded-3xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all cursor-pointer flex flex-col items-center"
          >
            <div className="text-6xl mb-4 text-purple-600">👤</div>

            <h2 className="text-3xl font-bold text-gray-800 mb-2">
              Customer
            </h2>

            <p className="text-gray-600 text-center text-lg">
              Login or Sign Up to order delicious food.
            </p>
          </Link>

          {/* STAFF CARD */}
          <Link
            to="/staff"
            className="bg-white p-10 rounded-3xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all cursor-pointer flex flex-col items-center"
          >
            <div className="text-6xl mb-4 text-orange-600">👨‍🍳</div>

            <h2 className="text-3xl font-bold text-gray-800 mb-2">
              Staff
            </h2>

            <p className="text-gray-600 text-center text-lg">
              Admin, Chef or Delivery login.
            </p>
          </Link>

        </div>
      </div>
    </div>
  );
}
