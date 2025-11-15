import { Link } from "react-router-dom";
import { useState } from "react";

export default function ManageMenu() {
  const [menu, setMenu] = useState([
    { id: 1, name: "Pizza", price: 299, category: "Italian" },
    { id: 2, name: "Burger", price: 149, category: "Fast Food" },
    { id: 3, name: "Biryani", price: 249, category: "Indian" }
  ]);

  const deleteItem = (id) => {
    setMenu(menu.filter((item) => item.id !== id));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-600 via-red-500 to-purple-700 px-8 py-12 text-white">
      
      <h1 className="text-5xl font-extrabold text-center mb-12">🍽 Manage Menu</h1>

      <Link
        to="/admin/add-item"
        className="px-8 py-3 bg-yellow-400 text-gray-900 font-bold rounded-xl hover:scale-105 transition"
      >
        ➕ Add Food Item
      </Link>

      <div className="max-w-5xl mx-auto mt-12 grid gap-8">
        {menu.map((item) => (
          <div
            key={item.id}
            className="p-8 bg-white/20 rounded-3xl backdrop-blur-xl shadow-xl border border-white/30"
          >
            <h2 className="text-3xl font-bold">{item.name}</h2>
            <p className="text-lg">Category: {item.category}</p>
            <p className="text-xl font-bold mt-2">₹ {item.price}</p>

            <div className="flex gap-4 mt-6">
              <Link
                to={`/admin/edit-item/${item.id}`}
                className="px-6 py-2 bg-yellow-400 text-gray-900 rounded-lg font-bold"
              >
                Edit
              </Link>

              <button
                onClick={() => deleteItem(item.id)}
                className="px-6 py-2 bg-red-500 rounded-lg font-bold hover:scale-105 transition"
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
