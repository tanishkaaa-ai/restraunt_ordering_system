import { useState } from "react";

export default function UsersList() {
  const [users] = useState([
    { id: 1, name: "Tanisha", role: "customer" },
    { id: 2, name: "Rahul", role: "chef" },
    { id: 3, name: "Amit", role: "delivery" },
    { id: 4, name: "Sneha", role: "admin" },
  ]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-600 via-pink-500 to-purple-700 px-8 py-12 text-white">

      <h1 className="text-5xl font-extrabold text-center mb-12">👥 All Users</h1>

      <div className="max-w-5xl mx-auto grid gap-10">

        {users.map((user) => (
          <div
            key={user.id}
            className="p-8 bg-white/20 rounded-3xl backdrop-blur-xl border border-white/30 shadow-xl"
          >
            <h2 className="text-3xl font-bold">{user.name}</h2>
            <p className="text-xl mt-2">Role: {user.role.toUpperCase()}</p>
          </div>
        ))}

      </div>

    </div>
  );
}
