import { useState } from "react";

import MainLayout from "../layouts/MainLayout";

import { Link, useNavigate } from "react-router-dom";

import API from "../services/api";

const Register = () => {

  const navigate = useNavigate();

  const [formData, setFormData] =
    useState({
      name: "",
      email: "",
      password: "",
    });

  const [loading, setLoading] =
    useState(false);

  const [error, setError] =
    useState("");

  // Handle Input
  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]:
        e.target.value,
    });
  };

  // Submit Register
  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      setLoading(true);

      setError("");

      await API.post(
        "/auth/register",
        formData
      );

      navigate("/login");

    } catch (error) {

      setError(
        error.response?.data?.message ||
        "Registration failed"
      );

    } finally {

      setLoading(false);
    }
  };

  return (

    <MainLayout>

      <div className="min-h-[90vh] flex items-center justify-center bg-gray-100 px-6">

        <div className="bg-white shadow-2xl rounded-2xl overflow-hidden grid md:grid-cols-2 max-w-5xl w-full">

          {/* Left Image */}
          <div className="hidden md:block">

            <img
              src="https://images.unsplash.com/photo-1496747611176-843222e1e57c"
              alt="register"
              className="h-full w-full object-cover"
            />

          </div>

          {/* Right Form */}
          <div className="p-10">

            <h2 className="text-4xl font-bold mb-3">
              Create Account
            </h2>

            <p className="text-gray-500 mb-8">
              Join STYLEFORGE today
            </p>

            {/* Error */}
            {error && (

              <div className="bg-red-100 text-red-600 p-3 rounded-lg mb-4">

                {error}

              </div>
            )}

            <form
              onSubmit={handleSubmit}
              className="space-y-5"
            >

              <div>

                <label className="block mb-2 font-medium">
                  Full Name
                </label>

                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
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
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
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
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Create password"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-black"
                />

              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition"
              >

                {loading
                  ? "Loading..."
                  : "Register"}

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