import React from "react";
import { Link } from "react-router-dom";

export default function AdminDashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 text-white px-8 py-16">

      {/* HEADER */}
      <h1 className="text-5xl font-extrabold text-center mb-14 drop-shadow-lg tracking-wide">
        🧑‍💼 Admin Control Panel
      </h1>

      <p className="text-center text-lg mb-16 opacity-90">
        Manage everything from menu items to orders and user roles.
      </p>

      {/* MAIN GRID */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">

        {/* Manage Menu */}
        <div className="group p-10 bg-white/20 hover:bg-white/30 rounded-3xl shadow-2xl backdrop-blur-lg border border-white/40 transition-all duration-300 hover:-translate-y-2">
          <h2 className="text-3xl font-bold mb-4">🍽 Manage Menu</h2>
          <p className="text-lg mb-8 text-white/90">
            Add, edit, or delete food items from the menu.
          </p>

          <Link
            to="/admin/menu"
            className="inline-block px-8 py-3 bg-yellow-400 hover:bg-yellow-300 text-gray-900 rounded-xl font-bold transition-transform duration-200 hover:scale-105 shadow-lg"
          >
            Go to Menu
          </Link>
        </div>

        {/* Orders */}
        <div className="group p-10 bg-white/20 hover:bg-white/30 rounded-3xl shadow-2xl backdrop-blur-lg border border-white/40 transition-all duration-300 hover:-translate-y-2">
          <h2 className="text-3xl font-bold mb-4">🧾 Orders</h2>
          <p className="text-lg mb-8 text-white/90">
            Track all customer orders in real-time.
          </p>

          <Link
            to="/admin/orders"
            className="inline-block px-8 py-3 bg-yellow-400 hover:bg-yellow-300 text-gray-900 rounded-xl font-bold transition-transform duration-200 hover:scale-105 shadow-lg"
          >
            View Orders
          </Link>
        </div>

        {/* Users */}
        <div className="group p-10 bg-white/20 hover:bg-white/30 rounded-3xl shadow-2xl backdrop-blur-lg border border-white/40 transition-all duration-300 hover:-translate-y-2">
          <h2 className="text-3xl font-bold mb-4">👥 Manage Users</h2>
          <p className="text-lg mb-8 text-white/90">
            View all admins, chefs, delivery agents, and customers.
          </p>

          <Link
            to="/admin/users"
            className="inline-block px-8 py-3 bg-yellow-400 hover:bg-yellow-300 text-gray-900 rounded-xl font-bold transition-transform duration-200 hover:scale-105 shadow-lg"
          >
            View Users
          </Link>
        </div>
      </div>
      <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto mb-16">
  {[
    { label: "Total Orders", value: "542", color: "bg-green-400" },
    { label: "Active Chefs", value: "12", color: "bg-blue-400" },
    { label: "Deliveries", value: "189", color: "bg-orange-400" },
    { label: "Customers", value: "834", color: "bg-pink-400" },
  ].map((stat, i) => (
    <div key={i} className={`p-6 ${stat.color} rounded-2xl text-white text-center shadow-lg`}>
      <h3 className="text-3xl font-bold">{stat.value}</h3>
      <p className="text-lg">{stat.label}</p>
    </div>
  ))}
</div>

      {/* FOOTER */}
      <div className="mt-20 text-center text-white/80">
        <p className="text-sm">© 2025 FoodEat Admin Portal | Designed by Tanisha 🍊</p>
      </div>
    </div>
  );
}
