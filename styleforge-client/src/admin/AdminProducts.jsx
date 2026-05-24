import {
  useEffect,
  useState,
} from "react";

import {
  Link,
} from "react-router-dom";

import AdminLayout
  from "../layouts/AdminLayout";

import API
  from "../services/api";

const AdminProducts = () => {

  const [products, setProducts] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

  const [search, setSearch] =
    useState("");

  const [category, setCategory] =
    useState("All");

  // Fetch Products
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

  useEffect(() => {

  const loadProducts =
    async () => {

      try {

        await fetchProducts();

      } catch (error) {

        console.log(error);
      }
    };

  loadProducts();

}, []);

  // Delete Product
  const handleDelete =
    async (id) => {

      const confirmDelete =
        window.confirm(
          "Delete this product?"
        );

      if (!confirmDelete) return;

      try {

        await API.delete(
          `/products/${id}`
        );

        fetchProducts();

      } catch (error) {

        console.log(error);
      }
    };

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

  return (

    <AdminLayout>

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-10">

        <div>

          <h1 className="text-5xl font-bold mb-2">

            Products

          </h1>

          <p className="text-gray-500">

            Total Products:
            {" "}
            {filteredProducts.length}

          </p>

        </div>

        <Link
          to="/admin/add-product"
          className="bg-black text-white px-6 py-3 rounded-xl hover:bg-gray-800 transition text-center"
        >

          Add Product

        </Link>

      </div>

      {/* Filters */}
      <div className="flex flex-col md:flex-row gap-4 mb-8">

        {/* Search */}
        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) =>
            setSearch(
              e.target.value
            )
          }
          className="border border-gray-300 rounded-xl px-4 py-3 outline-none w-full"
        />

        {/* Category */}
        <select
          value={category}
          onChange={(e) =>
            setCategory(
              e.target.value
            )
          }
          className="border border-gray-300 rounded-xl px-4 py-3 outline-none"
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
          {/* Empty State */}
          {filteredProducts.length === 0 ? (

            <div className="bg-white rounded-2xl shadow-md p-20 text-center">

              <h2 className="text-3xl font-bold mb-4">

                No Products Found

              </h2>

              <p className="text-gray-500 mb-8">

                Add your first product to get started.

              </p>

              <Link
                to="/admin/add-product"
                className="bg-black text-white px-6 py-3 rounded-xl"
              >

                Add Product

              </Link>

            </div>

          ) : (

            /* Product Table */
            <div className="bg-white rounded-2xl shadow-md overflow-x-auto">

              <table className="w-full min-w-[900px]">

                <thead className="bg-black text-white">

                  <tr>

                    <th className="p-4 text-left">
                      Image
                    </th>

                    <th className="p-4 text-left">
                      Title
                    </th>

                    <th className="p-4 text-left">
                      Price
                    </th>

                    <th className="p-4 text-left">
                      Category
                    </th>

                    <th className="p-4 text-left">
                      Stock
                    </th>

                    <th className="p-4 text-left">
                      Actions
                    </th>

                  </tr>

                </thead>

                <tbody>

                  {filteredProducts.map(
                    (product) => (

                      <tr
                        key={product._id}
                        className="border-b hover:bg-gray-50 transition"
                      >

                        {/* Image */}
                        <td className="p-4">

                          <img
                            src={product.image}
                            alt={product.title}
                            className="w-20 h-20 object-cover rounded-xl"
                          />

                        </td>

                        {/* Title */}
                        <td className="p-4 font-medium">

                          {product.title}

                        </td>

                        {/* Price */}
                        <td className="p-4 font-semibold">

                          ${product.price}

                        </td>

                        {/* Category */}
                        <td className="p-4">

                          {product.category}

                        </td>

                        {/* Stock */}
                        <td className="p-4">

                          {product.stock}

                        </td>

                        {/* Actions */}
                        <td className="p-4">

                          <div className="flex gap-3">

                            {/* Edit */}
                            <Link
                              to={`/admin/edit-product/${product._id}`}
                              className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
                            >

                              Edit

                            </Link>

                            {/* Delete */}
                            <button
                              onClick={() =>
                                handleDelete(
                                  product._id
                                )
                              }
                              className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
                            >

                              Delete

                            </button>

                          </div>

                        </td>

                      </tr>
                    )
                  )}

                </tbody>

              </table>

            </div>
          )}
        </>
      )}

    </AdminLayout>
  );
};

export default AdminProducts;