import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../../utils/api";

export default function AdminDashboard() {
  const [stats, setStats] = useState({
    totalOrders: 0,
    totalChefs: 0,
    totalDelivery: 0,
    totalCustomers: 0,
    totalMenuItems: 0,
  });

  useEffect(() => {
    api.get("/dashboard/admin/stats")
      .then(res => setStats(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 text-white px-8 py-16">

      <h1 className="text-5xl font-extrabold text-center mb-14 drop-shadow-lg tracking-wide">
        🧑‍💼 Admin Control Panel
      </h1>

      <p className="text-center text-lg mb-16 opacity-90">
        Manage menu, orders, users, and system reports.
      </p>

      {/* STATS */}
      <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto mb-20">
        <StatCard label="Total Orders" value={stats.totalOrders} color="bg-green-400" />
        <StatCard label="Menu Items" value={stats.totalMenuItems} color="bg-blue-400" />
        <StatCard label="Customers" value={stats.totalCustomers} color="bg-orange-400" />
        <StatCard label="Delivery Agents" value={stats.totalDelivery} color="bg-pink-400" />
      </div>

      {/* MAIN MENU */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">

        <AdminBox
          title="🍽 Manage Menu"
          text="Add, edit, or delete food items."
          link="/admin/menu"
        />

        <AdminBox
          title="🧾 Orders"
          text="Track all customer orders."
          link="/admin/orders"
        />

        <AdminBox
          title="👥 Users"
          text="Admins, chefs, delivery & customers."
          link="/admin/users"
        />

      </div>

      <div className="mt-20 text-center text-white/80">
        <p className="text-sm">© 2025 Admin Portal | Designed by Tanisha 🍊</p>
      </div>
    </div>
  );
}

function AdminBox({ title, text, link }) {
  return (
    <div className="group p-10 bg-white/20 hover:bg-white/30 rounded-3xl shadow-2xl backdrop-blur-lg border border-white/40 transition-all duration-300 hover:-translate-y-2">
      <h2 className="text-3xl font-bold mb-4">{title}</h2>
      <p className="text-lg mb-8 text-white/90">{text}</p>

      <Link
        to={link}
        className="inline-block px-8 py-3 bg-yellow-400 hover:bg-yellow-300 text-gray-900 rounded-xl font-bold transition-transform duration-200 hover:scale-105 shadow-lg"
      >
        Open
      </Link>
    </div>
  );
}

function StatCard({ label, value, color }) {
  return (
    <div className={`p-6 ${color} rounded-2xl text-white text-center shadow-lg`}>
      <h3 className="text-3xl font-bold">{value}</h3>
      <p className="text-lg">{label}</p>
    </div>
  );
}
