import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "../../utils/api";

export default function MenuForm() {
  const { id } = useParams();          // id exists only in edit mode
  const navigate = useNavigate();

  const [item, setItem] = useState({
    name: "",
    price: "",
    category: "",
    image: "",
    description: ""
  });

  const isEdit = Boolean(id);          // true if editing

  // LOAD EXISTING ITEM (Edit mode)
  useEffect(() => {
    if (isEdit) {
      api.get(`/menu/${id}`)
        .then(res => setItem(res.data))
        .catch(err => console.log(err));
    }
  }, [id, isEdit]);

  // Add or Update
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (isEdit) {
        await api.put(`/menu/${id}`, item);
        alert("Item updated!");
      } else {
        await api.post("/menu/add", item);
        alert("Item added!");
      }

      navigate("/admin/menu");

    } catch (error) {
      console.log(error);
      alert("Failed to save item");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-500 via-orange-500 to-red-600 px-8 py-12 text-white">
      
      <h1 className="text-5xl font-extrabold text-center mb-12">
        {isEdit ? "✏️ Edit Food Item" : "➕ Add Food Item"}
      </h1>

      <form
        onSubmit={handleSubmit}
        className="max-w-3xl mx-auto bg-white/20 backdrop-blur-xl p-10 rounded-3xl border border-white/30"
      >
        <input
          required
          placeholder="Food Name"
          value={item.name}
          onChange={(e) => setItem({ ...item, name: e.target.value })}
          className="w-full p-4 rounded-xl mb-6 text-black"
        />

        <input
          required
          type="number"
          placeholder="Price"
          value={item.price}
          onChange={(e) => setItem({ ...item, price: e.target.value })}
          className="w-full p-4 rounded-xl mb-6 text-black"
        />

        <input
          required
          placeholder="Category"
          value={item.category}
          onChange={(e) => setItem({ ...item, category: e.target.value })}
          className="w-full p-4 rounded-xl mb-6 text-black"
        />

        <input
          placeholder="Image URL"
          value={item.image}
          onChange={(e) => setItem({ ...item, image: e.target.value })}
          className="w-full p-4 rounded-xl mb-6 text-black"
        />

        <textarea
          placeholder="Description"
          value={item.description}
          onChange={(e) => setItem({ ...item, description: e.target.value })}
          className="w-full p-4 rounded-xl mb-6 text-black"
        />

        <button
          type="submit"
          className="w-full py-4 bg-yellow-400 text-gray-900 rounded-xl font-bold hover:scale-105 transition"
        >
          {isEdit ? "Update Item" : "Add Item"}
        </button>
      </form>

    </div>
  );
}
