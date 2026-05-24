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
      }
    };

 useEffect(() => {

  const loadProducts =
    async () => {

      await fetchProducts();
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

  return (

    <AdminLayout>

      {/* Header */}
      <div className="flex items-center justify-between mb-10">

        <h1 className="text-5xl font-bold">
          Products
        </h1>

        <Link
          to="/admin/add-product"
          className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition"
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
          className="border border-gray-300 rounded-lg px-4 py-3 outline-none w-full"
        />

        {/* Category */}
        <select
          value={category}
          onChange={(e) =>
            setCategory(
              e.target.value
            )
          }
          className="border border-gray-300 rounded-lg px-4 py-3 outline-none"
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

      {/* Table */}
      <div className="bg-white rounded-2xl shadow-md overflow-hidden">

        <table className="w-full">

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
                  className="border-b"
                >

                  <td className="p-4">

                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-20 h-20 object-cover rounded-lg"
                    />

                  </td>

                  <td className="p-4">

                    {product.title}

                  </td>

                  <td className="p-4">

                    ${product.price}

                  </td>

                  <td className="p-4">

                    {product.category}

                  </td>

                  <td className="p-4">

                    {product.stock}

                  </td>

                  <td className="p-4 flex gap-3">

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

                  </td>

                </tr>
              )
            )}

          </tbody>

        </table>

      </div>

    </AdminLayout>
  );
};

export default AdminProducts;