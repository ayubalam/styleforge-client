import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-black text-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="text-2xl font-bold tracking-wide">
          STYLEFORGE
        </Link>

        {/* Menu */}
        <div className="flex items-center gap-6 text-lg">
          <Link to="/" className="hover:text-gray-300 transition">
            Home
          </Link>

          <Link to="/products" className="hover:text-gray-300 transition">
            Products
          </Link>

          <Link to="/cart" className="hover:text-gray-300 transition">
            Cart
          </Link>

          <Link
            to="/login"
            className="bg-white text-black px-4 py-2 rounded-lg hover:bg-gray-200 transition"
          >
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;