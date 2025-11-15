import React from "react";
import { useAuth } from "../../context/AuthContext";

export default function Profile() {
  const { user } = useAuth();

  const name = user?.name || user?.user?.name || "User";
  const email = user?.email || user?.user?.email || "Not available";
  const role = user?.role?.toUpperCase() || "USER";
  const created = user?.createdAt || user?.user?.createdAt;

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-100 via-orange-200 to-red-200 px-8 py-16 flex justify-center">
      
      <div className="bg-white/80 shadow-2xl rounded-3xl p-10 max-w-2xl w-full">

        {/* PROFILE HEADER */}
        <div className="flex flex-col items-center mb-10">
          <div className="w-24 h-24 rounded-full bg-accent text-white flex items-center justify-center text-4xl font-bold shadow-lg">
            {name.charAt(0).toUpperCase()}
          </div>

          <h1 className="mt-4 text-3xl font-extrabold text-gray-800">
            {name}
          </h1>

          <p className="text-gray-600 text-lg">{email}</p>

          <span className="mt-3 px-4 py-1 bg-accent text-white rounded-full text-sm shadow">
            {role}
          </span>
        </div>

        {/* DETAILS BOX */}
        <div className="bg-white rounded-2xl shadow-md p-6 border border-orange-200">

          <h2 className="text-xl font-bold text-gray-800 mb-4">Account Details</h2>

          <div className="space-y-3 text-gray-700">
            <p><strong>Name:</strong> {name}</p>
            <p><strong>Email:</strong> {email}</p>
            <p><strong>Role:</strong> {role}</p>
            {created && <p><strong>Joined:</strong> {new Date(created).toDateString()}</p>}
          </div>
        </div>

        {/* BUTTONS */}
        <div className="mt-10 flex gap-4">
          <button className="flex-1 py-3 bg-orange-500 text-white rounded-xl font-semibold hover:bg-orange-600 transition">
            Edit Profile
          </button>

          <button className="flex-1 py-3 bg-red-500 text-white rounded-xl font-semibold hover:bg-red-600 transition">
            Change Password
          </button>
        </div>

      </div>
    </div>
  );
}
