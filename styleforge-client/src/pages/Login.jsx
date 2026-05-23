import MainLayout from "../layouts/MainLayout";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

const Login = () => {

  const navigate = useNavigate();

  const { login } = useAuth();

  const handleLogin = (e) => {

    e.preventDefault();

    // Temporary fake admin login
    const fakeUser = {
      name: "Admin User",
      email: "admin@gmail.com",
      role: "admin",
    };

    login(fakeUser);

    navigate("/admin");
  };

  return (
    <MainLayout>

      <div className="min-h-[90vh] flex items-center justify-center bg-gray-100 px-6">

        <div className="bg-white shadow-2xl rounded-2xl overflow-hidden grid md:grid-cols-2 max-w-5xl w-full">

          {/* Left Side Image */}
          <div className="hidden md:block">

            <img
              src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f"
              alt="fashion"
              className="h-full w-full object-cover"
            />

          </div>

          {/* Right Side Form */}
          <div className="p-10">

            <h2 className="text-4xl font-bold mb-3">
              Welcome Back
            </h2>

            <p className="text-gray-500 mb-8">
              Login to your STYLEFORGE account
            </p>

            <form
              onSubmit={handleLogin}
              className="space-y-6"
            >

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
                  placeholder="Enter your password"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-black"
                />

              </div>

              <button
                type="submit"
                className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition"
              >
                Login
              </button>

            </form>

            <p className="mt-6 text-gray-600">

              Don't have an account?{" "}

              <Link
                to="/register"
                className="text-black font-semibold"
              >
                Register
              </Link>

            </p>

          </div>

        </div>

      </div>

    </MainLayout>
  );
};

export default Login;