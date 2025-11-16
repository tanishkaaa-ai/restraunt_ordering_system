import { Link } from "react-router-dom";

export default function ChefDashboard() {
  return (
     <div className="px-10 py-14 bg-[#FFD6C9] min-h-screen">
      <h1 className="text-5xl font-extrabold text-center mb-12 drop-shadow-lg">
        👨‍🍳 Chef Dashboard
      </h1>

      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-10">
        
       <div className="p-10 bg-white rounded-3xl shadow-2xl backdrop-blur-xl border border-white/30">

          <h2 className="text-3xl font-bold mb-4">📦 View Orders</h2>
          <p className="text-lg mb-6">See all orders assigned to you.</p>

          <Link
            to="/chef/orders"
            className="px-8 py-3 bg-orange-400 text-gray-900 rounded-xl font-bold hover:scale-105 transition"
          >
            Go to Orders
          </Link>
        </div>

      </div>
    </div>
  );
}
