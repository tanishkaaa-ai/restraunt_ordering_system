import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useState, useRef } from "react";

export default function Navbar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
const dropdownRef = useRef();

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
            </nav>
          </div>

          {/* RIGHT SIDE BUTTONS */}
          <div className="flex items-center gap-4">

            {/* If NOT logged in → Login + Signup */}
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

            {/* If logged in → TRACK ORDER only for customer */}
            {user && user.role === "customer" && (
              <Link
                to="/track"
                className="text-sm text-gray-600 hover:text-accent"
              >
                Track Order
              </Link>
            )}

            {/* ONLY CUSTOMERS SEE CART */}
            {user && user.role === "customer" && (
              <Link
                to="/cart"
                className="px-3 py-2 bg-accent text-white rounded-md text-sm shadow"
              >
                Cart
              </Link>
            )}

            {/* PROFILE DROPDOWN FOR ALL LOGGED-IN USERS */}
            {/* PROFILE DROPDOWN FOR ALL LOGGED-IN USERS */}
            {user && (
              <div className="relative" ref={dropdownRef}>

                {/* Profile Icon (CLICK) */}
                <button
                  onClick={() => setOpen(!open)}
                  className="flex items-center gap-2"
                >
                  <div className="w-10 h-10 rounded-full bg-accent text-white flex items-center justify-center font-bold">
                    {user?.user?.name?.charAt(0).toUpperCase() ||
                      user?.name?.charAt(0).toUpperCase()}
                  </div>
                </button>

                {/* DROPDOWN MENU */}
                {open && (
                  <div className="absolute right-0 mt-2 w-56 bg-white shadow-lg rounded-xl p-4 text-gray-800 z-50">
                    <p className="font-semibold">{user.user?.name || user.name}</p>
                    <p className="text-sm text-gray-500">{user.user?.email || user.email}</p>

                    <p className="text-sm mt-1">
                      Role: <span className="font-bold">{user.role.toUpperCase()}</span>
                    </p>

                    <hr className="my-3" />

                    <Link
                      to="/profile"
                      className="block text-sm py-1 hover:text-accent"
                      onClick={() => setOpen(false)}
                    >
                      View Profile
                    </Link>

                    <button
                      onClick={() => {
                        logout();
                        setOpen(false);
                      }}
                      className="text-red-500 text-sm mt-2 w-full text-left"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            )}


          </div>

        </div>
      </div>
    </header>
  );
}
