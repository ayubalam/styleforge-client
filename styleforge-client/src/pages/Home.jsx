import {
  Link,
} from "react-router-dom";

import {
  useEffect,
  useState,
} from "react";

import MainLayout
  from "../layouts/MainLayout";

import ProductCard
  from "../components/ProductCard";

import API
  from "../services/api";

const Home = () => {

  const [products, setProducts] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

  // Fetch Products
  useEffect(() => {

    const fetchProducts =
      async () => {

        try {

          const { data } =
            await API.get(
              "/products"
            );

          // Show only first 4 products
          setProducts(
            data.slice(0, 4)
          );

        } catch (error) {

          console.log(error);

        } finally {

          setLoading(false);
        }
      };

    fetchProducts();

  }, []);

  return (

    <MainLayout>

      {/* Hero Section */}
      <section className="bg-gray-100">

        <div className="max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-16 items-center">

          {/* Left */}
          <div>

            <p className="uppercase tracking-[6px] text-gray-500 mb-6">

              Premium Collection

            </p>

            <h1 className="text-6xl md:text-7xl font-black leading-tight mb-8">

              Modern Fashion
              <br />
              For Men

            </h1>

            <p className="text-gray-600 text-xl leading-relaxed mb-10">

              Discover premium quality outfits
              designed for modern men.
              Elevate your style with
              STYLEFORGE.

            </p>

            <div className="flex flex-wrap gap-5">

              <Link
                to="/products"
                className="bg-black text-white px-8 py-4 rounded-2xl hover:bg-gray-800 transition text-lg"
              >

                Shop Now

              </Link>

              <Link
                to="/products"
                className="border border-black px-8 py-4 rounded-2xl hover:bg-black hover:text-white transition text-lg"
              >

                Explore

              </Link>

            </div>

          </div>

          {/* Right */}
          <div>

            <img
              src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1200&auto=format&fit=crop"
              alt="fashion"
              className="rounded-3xl shadow-2xl w-full h-[700px] object-cover"
            />

          </div>

        </div>

      </section>

      {/* Featured Products */}
      <section className="py-24">

        <div className="max-w-7xl mx-auto px-6">

          {/* Heading */}
          <div className="text-center mb-20">

            <p className="uppercase tracking-[5px] text-gray-500 mb-4">

              Featured Products

            </p>

            <h2 className="text-5xl font-black mb-6">

              Best Selling Collection

            </h2>

            <p className="text-gray-500 text-lg max-w-2xl mx-auto">

              Explore our premium men's fashion collection.

            </p>

          </div>

          {/* Loading */}
          {loading ? (

            <div className="text-center py-20">

              <h2 className="text-3xl font-bold">

                Loading Products...

              </h2>

            </div>

          ) : (

            <>
              {/* Product Grid */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">

                {products.map(
                  (product) => (

                    <ProductCard
                      key={product._id}
                      product={product}
                    />
                  )
                )}

              </div>

              {/* View All */}
              <div className="text-center mt-16">

                <Link
                  to="/products"
                  className="bg-black text-white px-10 py-4 rounded-2xl hover:bg-gray-800 transition text-lg"
                >

                  View All Products

                </Link>

              </div>
            </>
          )}

        </div>

      </section>

      {/* Banner */}
      <section className="bg-black text-white py-24">

        <div className="max-w-5xl mx-auto px-6 text-center">

          <p className="uppercase tracking-[5px] text-gray-400 mb-6">

            STYLEFORGE COLLECTION

          </p>

          <h2 className="text-5xl md:text-6xl font-black mb-8 leading-tight">

            Elevate Your Style
            <br />
            With Premium Fashion

          </h2>

          <p className="text-gray-400 text-xl mb-10 leading-relaxed">

            Fashion designed for confidence,
            comfort, and luxury.

          </p>

          <Link
            to="/products"
            className="bg-white text-black px-10 py-4 rounded-2xl text-lg font-semibold hover:bg-gray-200 transition"
          >

            Explore Collection

          </Link>

        </div>

      </section>

    </MainLayout>
  );
};

export default Home;