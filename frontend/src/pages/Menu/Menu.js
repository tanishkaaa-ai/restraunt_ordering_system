import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Menu() {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const items = [
    {
      id: 1,
      name: "Cheesy Margherita Pizza",
      price: 299,
      desc: "Fresh basil, mozzarella, tomatoes & olive oil.",
      img: "https://images.unsplash.com/photo-1601924582975-7e307ea36ebf",
    },
    {
      id: 2,
      name: "Classic Veg Burger",
      price: 149,
      desc: "Crispy patty, cheese slice, onions & secret sauce.",
      img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd",
    },
    {
      id: 3,
      name: "Creamy Alfredo Pasta",
      price: 249,
      desc: "Rich cream sauce with herbs & parmesan.",
      img: "https://images.unsplash.com/photo-1603133872878-684f208fb84b",
    },
    {
      id: 4,
      name: "Chicken Biryani",
      price: 299,
      desc: "Aromatic basmati rice with tender chicken.",
      img: "https://images.unsplash.com/photo-1603899124588-50d3b1d71a7b",
    },
    {
      id: 5,
      name: "Chocolate Milkshake",
      price: 129,
      desc: "Thick chocolate shake topped with cream.",
      img: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90",
    },
    {
      id: 6,
      name: "Paneer Butter Masala",
      price: 299,
      desc: "Creamy gravy with soft paneer cubes.",
      img: "https://images.unsplash.com/photo-1621996346565-13e9b74073dd",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-500 via-red-500 to-purple-700 px-6 py-12">

      {/* PAGE HEADER */}
      <h1 className="text-5xl font-extrabold text-center text-white drop-shadow mb-10">
        Our Menu 🍽️
      </h1>

      {/* MENU GRID */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">

        {items.map((item) => (
          <div
            key={item.id}
            className="bg-white/20 backdrop-blur-xl border border-white/30 rounded-3xl shadow-xl overflow-hidden hover:scale-105 hover:shadow-2xl transition cursor-pointer"
          >
            {/* IMAGE */}
            <img
              src={item.img}
              alt={item.name}
              className="w-full h-56 object-cover"
            />

            {/* DETAILS */}
            <div className="p-6">
              <h2 className="text-2xl font-bold text-white drop-shadow mb-2">
                {item.name}
              </h2>

              <p className="text-white/90 text-sm mb-3">{item.desc}</p>

              <p className="text-lg font-semibold text-yellow-300 mb-4">
                ₹ {item.price}
              </p>

              {/* ADD TO CART BUTTON */}
              <button
                onClick={() => {
                  if (!user) {
                    navigate("/customer-auth"); // redirect to login/signup page
                    return;
                  }

                  alert("Added to Cart!");
                }}
                className={`w-full py-3 rounded-xl font-semibold shadow-lg transition 
                  ${
                    !user
                      ? "bg-gray-400 cursor-pointer"
                      : "bg-gradient-to-r from-yellow-400 to-orange-500 text-white hover:scale-105"
                  }`}
              >
                {user ? "Add to Cart" : "Login to Add"}
              </button>
            </div>
          </div>
        ))}

      </div>
    </div>
  );
}
