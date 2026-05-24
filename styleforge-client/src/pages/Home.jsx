import { useEffect, useState } from "react";

import MainLayout from "../layouts/MainLayout";

import ProductCard from "../components/ProductCard";

import API from "../services/api";

const Home = () => {

  const [products, setProducts] =
    useState([]);

  // Fetch Products
  useEffect(() => {

    const fetchProducts = async () => {

      try {

        const { data } =
          await API.get("/products");

        setProducts(data);

      } catch (error) {

        console.log(error);
      }
    };

    fetchProducts();

  }, []);

  return (

    <MainLayout>

      {/* Hero Section */}
      <section className="bg-gray-100 min-h-[90vh] flex items-center">

        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">

          {/* Left */}
          <div>

            <p className="text-gray-600 uppercase tracking-widest mb-3">
              Premium Collection
            </p>

            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">

              Modern Fashion <br />

              For Men

            </h1>

            <p className="text-gray-600 text-lg mb-8">

              Discover premium quality outfits designed for modern men.

            </p>

            <div className="flex gap-4">

              <button className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition">

                Shop Now

              </button>

              <button className="border border-black px-6 py-3 rounded-lg hover:bg-black hover:text-white transition">

                Explore

              </button>

            </div>

          </div>

          {/* Right */}
          <div className="flex justify-center">

            <img
              src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f"
              alt="fashion"
              className="rounded-2xl shadow-xl h-[600px] w-full object-cover"
            />

          </div>

        </div>

      </section>

      {/* Products */}
      <section className="py-20 bg-white">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-14">

            <h2 className="text-4xl font-bold mb-4">
              Featured Products
            </h2>

            <p className="text-gray-600">
              Explore our latest men's fashion collection
            </p>

          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

            {products.map((product) => (

              <ProductCard
                key={product._id}
                product={product}
              />
            ))}

          </div>

        </div>

      </section>

    </MainLayout>
  );
};

export default Home;