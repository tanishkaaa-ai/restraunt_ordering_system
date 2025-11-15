import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-500 via-red-500 to-purple-700 text-white px-6 py-12">

      <div className="max-w-5xl mx-auto text-center">

        <h1 className="text-6xl font-extrabold drop-shadow mb-6">
          Delicious Food Delivered Fast 🍔🍕🍟
        </h1>

        <p className="text-xl text-white/90 mb-10">
          Order your favorite dishes with a single click. Fresh. Fast. Hot.
        </p>

        <Link
          to="/menu"
          className="px-10 py-4 bg-white text-orange-600 font-bold text-xl rounded-2xl shadow-xl hover:scale-105 transition"
        >
          Explore Menu
        </Link>
      </div>

      {/* Illustrations / Food images section */}
      <div className="grid md:grid-cols-3 gap-8 mt-16">

        <img className="rounded-3xl shadow-xl"
          src="https://images.unsplash.com/photo-1627308595229-7830a5c91f9f"
          alt="Food" />

        <img className="rounded-3xl shadow-xl"
          src="https://images.unsplash.com/photo-1543353071-087092ec393f"
          alt="Food" />

        <img className="rounded-3xl shadow-xl"
          src="https://images.unsplash.com/photo-1551183053-bf91a1d81141"
          alt="Food" />

      </div>

    </div>
  );
}
