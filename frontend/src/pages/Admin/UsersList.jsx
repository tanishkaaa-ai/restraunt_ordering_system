import React, { useEffect, useState } from "react";
import api from "../../utils/api";

export default function UsersList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    api
      .get("/dashboard/admin/users")
      .then((res) => setUsers(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
     <div className="px-10 py-14 bg-[#FFD6C9] min-h-screen">
      <h1 className="text-5xl font-extrabold text-center mb-12">👥 All Users</h1>

      <div className="max-w-6xl mx-auto grid gap-10">
        {users.length === 0 && (
          <p className="text-center text-lg opacity-90">Loading users...</p>
        )}

        {users.map((user) => (
          <div
            key={user._id}
           className="p-8 bg-white rounded-3xl backdrop-blur-xl border border-white/30 shadow-xl"

          >
            <h2 className="text-3xl font-bold">{user.name}</h2>

            <p className="text-xl mt-3">
              📧 <span className="font-semibold">{user.email}</span>
            </p>

            <p className="text-xl mt-2">
              🎭 Role:
              <span className="ml-2 px-3 py-1 bg-orange-400 rounded-xl font-bold uppercase">
                {user.role}
              </span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
