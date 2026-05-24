import {
  useEffect,
  useState,
} from "react";

import {
  useNavigate,
  useParams,
} from "react-router-dom";

import AdminLayout
  from "../layouts/AdminLayout";

import API
  from "../services/api";

const EditProduct = () => {

  const { id } = useParams();

  const navigate =
    useNavigate();

  const [formData, setFormData] =
    useState({
      title: "",
      description: "",
      price: "",
      category: "",
      image: "",
      stock: "",
    });

  const [loading, setLoading] =
    useState(false);

  // Fetch Product
  useEffect(() => {

    const fetchProduct =
      async () => {

        try {

          const { data } =
            await API.get(
              `/products/${id}`
            );

          setFormData(data);

        } catch (error) {

          console.log(error);
        }
      };

    fetchProduct();

  }, [id]);

  // Handle Input
  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]:
        e.target.value,
    });
  };

  // Submit Update
  const handleSubmit = async (
    e
  ) => {

    e.preventDefault();

    try {

      setLoading(true);

      await API.put(
        `/products/${id}`,
        formData
      );

      navigate(
        "/admin/products"
      );

    } catch (error) {

      console.log(error);

    } finally {

      setLoading(false);
    }
  };

  return (

    <AdminLayout>

      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-2xl p-10">

        <h1 className="text-4xl font-bold mb-10">

          Edit Product

        </h1>

        <form
          onSubmit={handleSubmit}
          className="space-y-6"
        >

          {/* Title */}
          <div>

            <label className="block mb-2 font-medium">
              Product Title
            </label>

            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-black"
            />

          </div>

          {/* Description */}
          <div>

            <label className="block mb-2 font-medium">
              Description
            </label>

            <textarea
              name="description"
              rows="4"
              value={formData.description}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-black"
            />

          </div>

          {/* Price */}
          <div>

            <label className="block mb-2 font-medium">
              Price
            </label>

            <input
              type="number"
              name="price"
              value={formData.price}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-black"
            />

          </div>

          {/* Category */}
          <div>

            <label className="block mb-2 font-medium">
              Category
            </label>

            <input
              type="text"
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-black"
            />

          </div>

          {/* Image */}
          <div>

            <label className="block mb-2 font-medium">
              Image URL
            </label>

            <input
              type="text"
              name="image"
              value={formData.image}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-black"
            />

          </div>

          {/* Stock */}
          <div>

            <label className="block mb-2 font-medium">
              Stock
            </label>

            <input
              type="number"
              name="stock"
              value={formData.stock}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-black"
            />

          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className="bg-black text-white px-8 py-4 rounded-xl hover:bg-gray-800 transition"
          >

            {loading
              ? "Updating..."
              : "Update Product"}

          </button>

        </form>

      </div>

    </AdminLayout>
  );
};

export default EditProduct;