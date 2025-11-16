import React, { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../utils/api";
import { AuthContext } from "../../context/AuthContext";

export default function Landing() {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  const [topItems, setTopItems] = useState([]);

  // Fetch top 3 menu items
  useEffect(() => {
    api
      .get("/menu")
      .then((res) => setTopItems(res.data.slice(0, 3)))
      .catch((err) => console.log(err));
  }, []);

  // Handle Add to Cart
  const handleAdd = async (item) => {
    if (!user) {
      navigate("/login");
      return;
    }

    try {
      await api.post("/cart/add", {
        itemId: item._id,
        quantity: 1,
      });

      alert("Item added to cart!");
    } catch (error) {
      console.log(error);
      alert("Failed to add item");
    }
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-orange-200 via-amber-200 to-red-200 p-6 flex flex-col">

      {/* HERO SECTION */}
      <div className="flex flex-col lg:flex-row items-center gap-12 px-8">

        {/* LEFT TEXT */}
        <div className="flex-1">
          <h2 className="text-5xl font-extrabold mb-5 text-gray-800 leading-snug">
            Delicious Food Is <br /> Waiting For You
          </h2>

          <p className="text-gray-700 mb-6 text-lg">
            Enjoy freshly prepared food with fast delivery.  
            Quality you can trust. Taste you’ll love.
          </p>

          <div className="flex gap-6 mt-6">
            <button
              onClick={() => navigate("/menu")}
              className="bg-orange-600 text-white px-8 py-3 rounded-full shadow-lg font-semibold hover:bg-orange-700"
            >
              Get Started →
            </button>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex-1 flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1604908812623-5f3f20e339cd"
            alt="food bowl"
            className="rounded-full w-96 h-96 object-cover shadow-2xl border-8 border-white"
          />
        </div>
      </div>

      {/* TOP LIST DYNAMIC MENU */}
      <div className="mt-20 px-8">
        <h3 className="text-4xl font-semibold text-gray-800 mb-4">Top List</h3>
        <p className="text-gray-600 mb-10">Our mainstay menu</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {topItems.map((food) => (
            <div
              key={food._id}
              className="bg-white p-6 rounded-3xl shadow-xl"
            >
              <img
                src={food.image}
                alt={food.name}
                className="rounded-lg h-40 w-full object-cover"
              />

              <h4 className="mt-4 text-xl font-bold">{food.name}</h4>
              <p className="text-gray-500 text-sm">{food.description}</p>

              <div className="flex justify-between items-center mt-3">
                <span className="text-lg font-bold">₹{food.price}</span>

                <button
                  onClick={() => handleAdd(food)}
                  className="bg-orange-500 text-white px-4 py-1 rounded-full"
                >
                  +
                </button>
              </div>
            </div>
          ))}

        </div>
      </div>

    </div>
  );
}
