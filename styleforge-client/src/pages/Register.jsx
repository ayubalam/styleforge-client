import MainLayout from "../layouts/MainLayout";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <MainLayout>

      <div className="min-h-[90vh] flex items-center justify-center bg-gray-100 px-6">

        <div className="bg-white shadow-2xl rounded-2xl overflow-hidden grid md:grid-cols-2 max-w-5xl w-full">

          {/* Left Side */}
          <div className="hidden md:block">

            <img
              src="https://images.unsplash.com/photo-1496747611176-843222e1e57c"
              alt="register"
              className="h-full w-full object-cover"
            />

          </div>

          {/* Right Side */}
          <div className="p-10">

            <h2 className="text-4xl font-bold mb-3">
              Create Account
            </h2>

            <p className="text-gray-500 mb-8">
              Join STYLEFORGE today
            </p>

            <form className="space-y-5">

              <div>

                <label className="block mb-2 font-medium">
                  Full Name
                </label>

                <input
                  type="text"
                  placeholder="Enter your full name"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-black"
                />

              </div>

              <div>

                <label className="block mb-2 font-medium">
                  Email
                </label>

                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-black"
                />

              </div>

              <div>

                <label className="block mb-2 font-medium">
                  Password
                </label>

                <input
                  type="password"
                  placeholder="Create password"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-black"
                />

              </div>

              <button
                className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition"
              >
                Register
              </button>

            </form>

            <p className="mt-6 text-gray-600">

              Already have an account?{" "}

              <Link
                to="/login"
                className="text-black font-semibold"
              >
                Login
              </Link>

            </p>

          </div>

        </div>

      </div>

    </MainLayout>
  );
};

export default Register;