import { Link } from "react-router-dom";

export default function UserTypeSelect() {
  return (
    <div className="max-w-3xl mx-auto p-10">
      <h2 className="text-3xl font-bold mb-8">Select Your Role</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">

        {/* Customer Button */}
        <Link
          to="/customer-auth"
          className="p-10 bg-white rounded-2xl shadow hover:shadow-xl text-center hover:scale-105 transition"
        >
          <div className="text-4xl mb-4">👤</div>
          <h3 className="text-xl font-semibold text-gray-800">Customer</h3>
          <p className="text-gray-500 text-sm mt-2">
            Login or Sign Up to order food.
          </p>
        </Link>

        {/* Staff Button */}
        <Link
          to="/staff"
          className="p-10 bg-white rounded-2xl shadow hover:shadow-xl text-center hover:scale-105 transition"
        >
          <div className="text-4xl mb-4">👨‍🍳</div>
          <h3 className="text-xl font-semibold text-gray-800">Staff</h3>
          <p className="text-gray-500 text-sm mt-2">
            Admin, Chef or Delivery login.
          </p>
        </Link>

      </div>
    </div>
  );
}
