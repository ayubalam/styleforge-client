import { Link } from "react-router-dom";

import { useAuth } from "../hooks/useAuth";

const Navbar = () => {

  const { user, logout } = useAuth();

  // Handle Logout
  const handleLogout = () => {

    logout();
  };

  return (

    <nav className="bg-black text-white shadow-md">

      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-bold tracking-wide"
        >
          STYLEFORGE
        </Link>

        {/* Menu */}
        <div className="flex items-center gap-6 text-lg">

          <Link
            to="/"
            className="hover:text-gray-300 transition"
          >
            Home
          </Link>

          <Link
            to="/products"
            className="hover:text-gray-300 transition"
          >
            Products
          </Link>

          <Link
            to="/cart"
            className="hover:text-gray-300 transition"
          >
            Cart
          </Link>

          {/* Logged In */}
          {user ? (

            <div className="flex items-center gap-4">

              {/* Admin Dashboard */}
              {user.role === "admin" && (

                <Link
                  to="/admin"
                  className="bg-white text-black px-4 py-2 rounded-lg hover:bg-gray-200 transition"
                >
                  Dashboard
                </Link>
              )}

              {/* User Name */}
              <span className="font-semibold">

                {user.name}

              </span>

              {/* Logout */}
              <button
                onClick={handleLogout}
                className="bg-red-500 px-4 py-2 rounded-lg hover:bg-red-600 transition"
              >
                Logout
              </button>

            </div>

          ) : (

            <div className="flex items-center gap-4">

              <Link
                to="/login"
                className="hover:text-gray-300 transition"
              >
                Login
              </Link>

              <Link
                to="/register"
                className="bg-white text-black px-4 py-2 rounded-lg hover:bg-gray-200 transition"
              >
                Register
              </Link>

            </div>

          )}

        </div>

      </div>

    </nav>
  );
};

export default Navbar;