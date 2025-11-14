import { Link } from "react-router-dom";

export default function StaffPortal() {
  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 px-6">
      <div className="bg-white p-10 rounded-3xl shadow-2xl max-w-2xl w-full">
        
        <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-8">
          Staff Access
        </h2>

        <p className="text-center text-gray-600 mb-10">
          Select your staff role to continue
        </p>

        <div className="grid md:grid-cols-3 gap-8">

          {/* Admin */}
          <Link
            to="/staff/auth?role=admin"
            className="bg-gradient-to-br from-yellow-400 to-orange-500 p-8 rounded-2xl text-center text-white shadow-lg hover:scale-105 transition"
          >
            <div className="text-5xl mb-3">🛠️</div>
            <div className="text-xl font-semibold">Admin</div>
          </Link>

          {/* Chef */}
          <Link
            to="/staff/auth?role=chef"
            className="bg-gradient-to-br from-green-400 to-teal-500 p-8 rounded-2xl text-center text-white shadow-lg hover:scale-105 transition"
          >
            <div className="text-5xl mb-3">👨‍🍳</div>
            <div className="text-xl font-semibold">Chef</div>
          </Link>

          {/* Delivery */}
          <Link
            to="/staff/auth?role=delivery"
            className="bg-gradient-to-br from-blue-400 to-indigo-500 p-8 rounded-2xl text-center text-white shadow-lg hover:scale-105 transition"
          >
            <div className="text-5xl mb-3">🚚</div>
            <div className="text-xl font-semibold">Delivery</div>
          </Link>

        </div>
      </div>
    </div>
  );
}
