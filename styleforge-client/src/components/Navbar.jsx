import {
  Link,
  NavLink,
} from "react-router-dom";

import {
  useAuth,
} from "../hooks/useAuth";

import {
  useCart,
} from "../hooks/useCart";

const Navbar = () => {

  const {
    user,
    logout,
  } = useAuth();

  const {
    cartItems,
  } = useCart();

  // Total Cart Items
  const cartCount =
    cartItems.reduce(
      (acc, item) =>
        acc + item.qty,
      0
    );

  return (

    <header className="sticky top-0 z-50 bg-white shadow-md">

      <div className="max-w-7xl mx-auto px-6">

        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <Link
            to="/"
            className="text-4xl font-black tracking-wide"
          >

            STYLEFORGE

          </Link>

          {/* Navigation */}
          <nav className="flex items-center gap-8">

            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-black font-bold"
                  : "text-gray-600 hover:text-black transition"
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/products"
              className={({ isActive }) =>
                isActive
                  ? "text-black font-bold"
                  : "text-gray-600 hover:text-black transition"
              }
            >
              Products
            </NavLink>

            {/* Cart */}
            <NavLink
              to="/cart"
              className="relative text-gray-600 hover:text-black transition"
            >

              Cart

              {/* Badge */}
              {cartCount > 0 && (

                <span className="absolute -top-3 -right-5 bg-black text-white text-xs w-6 h-6 rounded-full flex items-center justify-center">

                  {cartCount}

                </span>
              )}

            </NavLink>

            {/* Admin */}
            {user?.role === "admin" && (

              <NavLink
                to="/admin"
                className={({ isActive }) =>
                  isActive
                    ? "text-black font-bold"
                    : "text-gray-600 hover:text-black transition"
                }
              >
                Admin
              </NavLink>
            )}

            {/* Dashboard */}
            {user && (

              <NavLink
                to="/dashboard"
                className={({ isActive }) =>
                  isActive
                    ? "text-black font-bold"
                    : "text-gray-600 hover:text-black transition"
                }
              >
                Dashboard
              </NavLink>
            )}

            {/* Auth */}
            {!user ? (

              <>
                <Link
                  to="/login"
                  className="border border-black px-5 py-2 rounded-xl hover:bg-black hover:text-white transition"
                >
                  Login
                </Link>

                <Link
                  to="/register"
                  className="bg-black text-white px-5 py-2 rounded-xl hover:bg-gray-800 transition"
                >
                  Register
                </Link>
              </>

            ) : (

              <button
                onClick={logout}
                className="bg-red-500 text-white px-5 py-2 rounded-xl hover:bg-red-600 transition"
              >

                Logout

              </button>
            )}

          </nav>

        </div>

      </div>

    </header>
  );
};

export default Navbar;