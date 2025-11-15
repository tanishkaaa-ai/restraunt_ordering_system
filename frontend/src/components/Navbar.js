import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
export default function Navbar(){
  const { logout } = useAuth();
  const navigate = useNavigate();
  return (
    <header className="bg-white/90 backdrop-blur-sm border-b sticky top-0 z-30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-6">
            <button onClick={() => navigate("/")} className="text-2xl font-semibold text-accent">DeliciousBites</button>
            <nav className="hidden md:flex gap-4 text-sm text-gray-700">
              <Link to="/menu" className="hover:text-accent">Menu</Link>
              <Link to="/about" className="hover:text-accent">About</Link>
              <Link to="/contact" className="hover:text-accent">Contact</Link>
              <button
  onClick={() => {
    logout();
    navigate("/login");
  }}
  className="text-red-500 font-semibold hover:text-red-600 cursor-pointer"
>
  Logout
</button>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <Link to="/track" className="text-sm text-gray-600 hover:text-accent">Track Order</Link>
            <Link to="/cart" className="px-3 py-2 bg-accent text-white rounded-md text-sm shadow">Cart</Link>
          </div>
        </div>
      </div>
    </header>
  );
}
