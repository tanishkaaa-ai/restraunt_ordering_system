import React, { useEffect, useState } from "react";
import api from "../../utils/api";
import { Link } from "react-router-dom";

export default function ManageMenu() {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    api.get("/menu")
      .then(res => setMenu(res.data))
      .catch(err => console.log(err));
  }, []);

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this menu item?")) return;

    try {
      await api.delete(`/menu/${id}`);
      setMenu(menu.filter(item => item._id !== id));
      alert("Item deleted!");
    } catch (err) {
      console.log(err);
      alert("Failed to delete item");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-300 to-red-300 p-10">

      <h1 className="text-4xl font-bold text-white text-center mb-10">
        🍽 Manage Menu
      </h1>

      <div className="text-center mb-8">
        <Link
          to="/admin/add-item"
          className="px-6 py-3 bg-green-600 text-white rounded-xl shadow-lg hover:bg-green-700"
        >
          ➕ Add New Item
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {menu.map((item) => (
          <div key={item._id} className="bg-white rounded-xl shadow-xl p-6">
            <img
              src={item.image}
              alt={item.name}
              className="rounded-xl w-full h-40 object-cover"
            />

            <h2 className="text-2xl font-semibold mt-4">{item.name}</h2>
            <p className="text-gray-600">{item.description}</p>

            <p className="text-xl font-bold text-orange-600 mt-3">
              ₹{item.price}
            </p>

            <div className="flex justify-between mt-5">
              <Link
                to={`/admin/edit/${item._id}`}
                className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
              >
                Edit
              </Link>

              <button
                onClick={() => handleDelete(item._id)}
                className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
              >
                Delete
              </button>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
}
