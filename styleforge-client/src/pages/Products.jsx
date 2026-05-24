import {
  useEffect,
  useState,
} from "react";

import {
  Link,
} from "react-router-dom";

import MainLayout
  from "../layouts/MainLayout";

import ProductCard
  from "../components/ProductCard";

import API
  from "../services/api";

import {
  useAuth,
} from "../hooks/useAuth";

const Products = () => {

  const {
    user,
  } = useAuth();

  const [products, setProducts] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

  const [search, setSearch] =
    useState("");

  const [category, setCategory] =
    useState("All");

  // Pagination
  const [currentPage, setCurrentPage] =
    useState(1);

  const productsPerPage = 8;

  // Fetch Products
  useEffect(() => {

    const fetchProducts =
      async () => {

        try {

          const { data } =
            await API.get(
              "/products"
            );

          setProducts(data);

        } catch (error) {

          console.log(error);

        } finally {

          setLoading(false);
        }
      };

    fetchProducts();

  }, []);

  // Categories
  const categories = [
    "All",
    ...new Set(
      products.map(
        (product) =>
          product.category
      )
    ),
  ];

  // Filter Products
  const filteredProducts =
    products.filter((product) => {

      const matchesSearch =
        product.title
          .toLowerCase()
          .includes(
            search.toLowerCase()
          );

      const matchesCategory =
        category === "All"
          ? true
          : product.category ===
            category;

      return (
        matchesSearch &&
        matchesCategory
      );
    });

  // Pagination Logic
  const indexOfLastProduct =
    currentPage *
    productsPerPage;

  const indexOfFirstProduct =
    indexOfLastProduct -
    productsPerPage;

  const currentProducts =
    filteredProducts.slice(
      indexOfFirstProduct,
      indexOfLastProduct
    );

  const totalPages =
    Math.ceil(
      filteredProducts.length /
      productsPerPage
    );

  // Change Page
  const paginate =
    (pageNumber) => {

      setCurrentPage(
        pageNumber
      );

      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    };

  return (

    <MainLayout>

      <section className="max-w-7xl mx-auto px-6 py-20">

        {/* Heading */}
        <div className="mb-14 text-center">

          <h1 className="text-5xl md:text-6xl font-bold mb-5">

            All Products

          </h1>

          <p className="text-gray-500 text-lg mb-8">

            Explore our premium men's fashion collection.

          </p>

          {/* Admin Button */}
          {user?.role === "admin" && (

            <Link
              to="/admin/add-product"
              className="bg-black text-white px-8 py-4 rounded-2xl hover:bg-gray-800 transition"
            >

              Add Product

            </Link>
          )}

        </div>

        {/* Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-14">

          {/* Search */}
          <input
            type="text"
            placeholder="Search products..."
            value={search}
            onChange={(e) => {

              setSearch(
                e.target.value
              );

              setCurrentPage(1);
            }}
            className="border border-gray-300 rounded-2xl px-5 py-4 outline-none w-full focus:border-black"
          />

          {/* Category */}
          <select
            value={category}
            onChange={(e) => {

              setCategory(
                e.target.value
              );

              setCurrentPage(1);
            }}
            className="border border-gray-300 rounded-2xl px-5 py-4 outline-none focus:border-black"
          >

            {categories.map((cat) => (

              <option
                key={cat}
                value={cat}
              >
                {cat}
              </option>
            ))}

          </select>

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
            {/* Empty */}
            {currentProducts.length === 0 ? (

              <div className="text-center py-20">

                <h2 className="text-4xl font-bold mb-4">

                  No Products Found

                </h2>

                <p className="text-gray-500">

                  Try another search.

                </p>

              </div>

            ) : (

              <>
                {/* Product Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">

                  {currentProducts.map(
                    (product) => (

                      <ProductCard
                        key={product._id}
                        product={product}
                      />
                    )
                  )}

                </div>

                {/* Pagination */}
                <div className="flex justify-center mt-16 gap-3 flex-wrap">

                  {/* Previous */}
                  <button
                    onClick={() =>
                      paginate(
                        currentPage - 1
                      )
                    }
                    disabled={
                      currentPage === 1
                    }
                    className="px-5 py-3 rounded-xl border border-gray-300 disabled:opacity-50"
                  >

                    Prev

                  </button>

                  {/* Page Numbers */}
                  {[...Array(totalPages)].map(
                    (_, index) => (

                      <button
                        key={index}
                        onClick={() =>
                          paginate(
                            index + 1
                          )
                        }
                        className={`px-5 py-3 rounded-xl transition ${
                          currentPage ===
                          index + 1
                            ? "bg-black text-white"
                            : "border border-gray-300 hover:bg-black hover:text-white"
                        }`}
                      >

                        {index + 1}

                      </button>
                    )
                  )}

                  {/* Next */}
                  <button
                    onClick={() =>
                      paginate(
                        currentPage + 1
                      )
                    }
                    disabled={
                      currentPage ===
                      totalPages
                    }
                    className="px-5 py-3 rounded-xl border border-gray-300 disabled:opacity-50"
                  >

                    Next

                  </button>

                </div>
              </>
            )}
          </>
        )}

      </section>

    </MainLayout>
  );
};

export default Products;