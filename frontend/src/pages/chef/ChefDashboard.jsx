import { Link } from "react-router-dom";

export default function ChefDashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-600 via-lime-500 to-yellow-400 text-white px-10 py-16">
      <h1 className="text-5xl font-extrabold text-center mb-12 drop-shadow-lg">
        👨‍🍳 Chef Dashboard
      </h1>

      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-10">
        
        <div className="p-10 bg-white/20 rounded-3xl shadow-2xl backdrop-blur-xl border border-white/30">
          <h2 className="text-3xl font-bold mb-4">📦 View Orders</h2>
          <p className="text-lg mb-6">See all orders assigned to you.</p>

          <Link
            to="/chef/orders"
            className="px-8 py-3 bg-yellow-300 text-gray-900 rounded-xl font-bold hover:scale-105 transition"
          >
            Go to Orders
          </Link>
        </div>

      </div>
    </div>
  );
}
