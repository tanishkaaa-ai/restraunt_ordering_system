import { Link } from "react-router-dom";

const Navbar = () => (
  <nav className="bg-blue-700 text-white flex justify-between px-6 py-3">
    <Link to="/" className="font-bold text-xl">SpiceBite</Link>
    <div className="space-x-4">
      <Link to="/menu">Menu</Link>
      <Link to="/cart">Cart</Link>
      <Link to="/orders">Orders</Link>
      <Link to="/login">Login</Link>
    </div>
  </nav>
);

export default Navbar;
