import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Navbar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  return (
    <header className="bg-white/90 backdrop-blur-sm border-b sticky top-0 z-30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* LOGO */}
          <div className="flex items-center gap-6">
            <button
              onClick={() => navigate("/")}
              className="text-2xl font-semibold text-accent"
            >
              DeliciousBites
            </button>

            {/* NAV LINKS */}
            <nav className="hidden md:flex gap-4 text-sm text-gray-700">
              <Link to="/menu" className="hover:text-accent">Menu</Link>
              <Link to="/about" className="hover:text-accent">About</Link>
              <Link to="/contact" className="hover:text-accent">Contact</Link>

              {/* SHOW LOGOUT ONLY IF USER LOGGED IN */}
              {user && (
                <button onClick={logout} className="text-red-500 font-semibold">
                  Logout
                </button>
              )}
            </nav>
          </div>

          {/* RIGHT SIDE BUTTONS */}
          {/* RIGHT SIDE BUTTONS */}
          <div className="flex items-center gap-4">

            {/* If NOT logged in → show Login & Signup */}
            {!user && (
              <>
                <Link
                  to="/login"
                  className="text-sm text-gray-600 hover:text-accent"
                >
                  Login
                </Link>

                <Link
                  to="/signup"
                  className="px-3 py-2 bg-accent text-white rounded-md text-sm shadow"
                >
                  Sign Up
                </Link>
              </>
            )}

            {/* If logged in → show Track Order */}
            {user && user.role==="customer" &&(
              <Link
                to="/track"
                className="text-sm text-gray-600 hover:text-accent"
              >
                Track Order
              </Link>
            )}

            {/* SHOW CART ONLY FOR CUSTOMERS */}
            {user && user.role === "customer" && (
              <Link
                to="/cart"
                className="px-3 py-2 bg-accent text-white rounded-md text-sm shadow"
              >
                Cart
              </Link>
            )}
          </div>

        </div>
      </div>
    </header>
  );
}
