import React from "react";
import { useNavigate } from "react-router-dom";

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-orange-200 via-amber-200 to-red-200 p-6 flex flex-col">

      {/* TOP NAV */}
      <div className="flex justify-between items-center mb-10 px-4">
        <h1 className="text-3xl font-extrabold text-orange-700 tracking-wide">
          FOODEAT
        </h1>

        <div className="flex gap-8 text-gray-700 text-lg font-medium">
          <a href="/" className="hover:text-black">Home</a>
          <a href="/menu" className="hover:text-black">Menu</a>
          <a href="/about" className="hover:text-black">About</a>
        </div>

        {/* Profile Icon */}
        <button
          onClick={() => navigate("/login")}
          className="bg-white p-3 rounded-full shadow-md hover:shadow-lg transition"
        >
          <span className="text-xl">👤</span>
        </button>
      </div>

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
              Food Menu
            </button>

            <button className="bg-white px-8 py-3 rounded-full shadow-md font-semibold hover:shadow-lg">
              Book a Table
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

      {/* TOP LIST MENU */}
      <div className="mt-20 px-8">
        <h3 className="text-4xl font-semibold text-gray-800 mb-4">
          Top List
        </h3>
        <p className="text-gray-600 mb-10">Our mainstay menu</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          
          {/* CARD 1 */}
          <div className="bg-white p-6 rounded-3xl shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1607290817806-6cc75b55aeff"
              className="rounded-lg h-40 w-full object-cover"
            />
            <h4 className="mt-4 text-xl font-bold">Noodles Three</h4>
            <p className="text-gray-500 text-sm">White plate with dried shrimps</p>
            <div className="flex justify-between items-center mt-3">
              <span className="text-lg font-bold">$12</span>
              <button className="bg-orange-500 text-white px-4 py-1 rounded-full">+</button>
            </div>
          </div>

          {/* CARD 2 */}
          <div className="bg-white p-6 rounded-3xl shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1589308078056-e3a8a0d57428"
              className="rounded-lg h-40 w-full object-cover"
            />
            <h4 className="mt-4 text-xl font-bold">Noodles One</h4>
            <p className="text-gray-500 text-sm">Spicy boil with seafood</p>
            <div className="flex justify-between items-center mt-3">
              <span className="text-lg font-bold">$20</span>
              <button className="bg-orange-500 text-white px-4 py-1 rounded-full">+</button>
            </div>
          </div>

          {/* CARD 3 */}
          <div className="bg-white p-6 rounded-3xl shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1525755662778-989d0524087e"
              className="rounded-lg h-40 w-full object-cover"
            />
            <h4 className="mt-4 text-xl font-bold">Noodles Two</h4>
            <p className="text-gray-500 text-sm">Prawn spicy soup</p>
            <div className="flex justify-between items-center mt-3">
              <span className="text-lg font-bold">$16</span>
              <button className="bg-orange-500 text-white px-4 py-1 rounded-full">+</button>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
};

export default Landing;
