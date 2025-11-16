import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../utils/api";

const Landing = () => {
  const navigate = useNavigate();
  const [topItems, setTopItems] = useState([]);

  // FETCH TOP 3 MENU ITEMS
  useEffect(() => {
    api.get("/menu")
      .then(res => {
        // take first 3 items
        setTopItems(res.data.slice(0, 3));
      })
      .catch(err => console.log(err));
  }, []);

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

        {/* RIGHT FOOD IMAGE */}
        <div className="flex-1 flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1604908812623-5f3f20e339cd"
            alt="food bowl"
            className="rounded-full w-96 h-96 object-cover shadow-2xl border-8 border-white"
          />
        </div>
      </div>

      {/* TOP LIST SECTION */}
      <div className="mt-20 px-8">
        <h3 className="text-4xl font-semibold text-gray-800 mb-4">
          Top List
        </h3>
        <p className="text-gray-600 mb-10">Our mainstay menu</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          
          {/* DYNAMIC CARDS */}
          {topItems.length > 0 ? (
            topItems.map(item => (
              <div key={item._id} className="bg-white p-6 rounded-3xl shadow-xl">
                <img
                  src={item.image}
                  alt={item.name}
                  className="rounded-lg h-40 w-full object-cover"
                />
                <h4 className="mt-4 text-xl font-bold">{item.name}</h4>
                <p className="text-gray-500 text-sm">{item.description}</p>

                <div className="flex justify-between items-center mt-3">
                  <span className="text-lg font-bold">₹{item.price}</span>
                  <button
                    onClick={() => navigate("/menu")}
                    className="bg-orange-500 text-white px-4 py-1 rounded-full"
                  >
                    +
                  </button>
                </div>
              </div>
            ))
          ) : (
            // SKELETON LOADERS (if API is slow)
            <>
              {[1, 2, 3].map(v => (
                <div
                  key={v}
                  className="bg-white p-6 rounded-3xl shadow-xl animate-pulse"
                >
                  <div className="h-40 bg-gray-300 rounded-lg"></div>
                  <div className="h-4 bg-gray-300 mt-4 w-1/2 rounded"></div>
                  <div className="h-3 bg-gray-200 mt-3 w-3/4 rounded"></div>
                </div>
              ))}
            </>
          )}

        </div>
      </div>
    </div>
  );
};

export default Landing;
