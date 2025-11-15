import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AddMenuItem() {
  const navigate = useNavigate();

  const [item, setItem] = useState({
    name: "",
    price: "",
    category: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Food Item Added!");
    navigate("/admin/menu");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-500 via-orange-500 to-red-600 px-8 py-12 text-white">
      
      <h1 className="text-5xl font-extrabold text-center mb-12">➕ Add Food Item</h1>

      <form
        onSubmit={handleSubmit}
        className="max-w-3xl mx-auto bg-white/20 backdrop-blur-xl p-10 rounded-3xl border border-white/30"
      >
        <input
          required
          placeholder="Food Name"
          className="w-full p-4 rounded-xl mb-6 text-black"
          onChange={(e) => setItem({ ...item, name: e.target.value })}
        />

        <input
          required
          placeholder="Price"
          type="number"
          className="w-full p-4 rounded-xl mb-6 text-black"
          onChange={(e) => setItem({ ...item, price: e.target.value })}
        />

        <input
          required
          placeholder="Category"
          className="w-full p-4 rounded-xl mb-8 text-black"
          onChange={(e) => setItem({ ...item, category: e.target.value })}
        />

        <button
          type="submit"
          className="w-full py-4 bg-yellow-400 text-gray-900 rounded-xl font-bold hover:scale-105 transition"
        >
          Add Item
        </button>
      </form>

    </div>
  );
}
