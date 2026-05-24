import {
  useState,
} from "react";

import {
  useNavigate,
} from "react-router-dom";

import AdminLayout
  from "../layouts/AdminLayout";

import API
  from "../services/api";

const AddProduct = () => {

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

  const [uploading, setUploading] =
    useState(false);

  // Handle Input
  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]:
        e.target.value,
    });
  };

  // Upload Image
  const uploadFileHandler =
    async (e) => {

      const file =
        e.target.files[0];

      if (!file) return;

      const uploadData =
        new FormData();

      uploadData.append(
        "image",
        file
      );

      try {

        setUploading(true);

        const { data } =
          await API.post(
            "/upload",
            uploadData,
            {
              headers: {
                "Content-Type":
                  "multipart/form-data",
              },
            }
          );

        setFormData({
          ...formData,
          image:
            data.imageUrl,
        });

      } catch (error) {

        console.log(error);

      } finally {

        setUploading(false);
      }
    };

  // Submit Form
  const handleSubmit =
    async (e) => {

      e.preventDefault();

      try {

        setLoading(true);

        await API.post(
          "/products",
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

      <div className="max-w-5xl mx-auto bg-white shadow-xl rounded-3xl p-10">

        {/* Heading */}
        <div className="mb-10">

          <h1 className="text-5xl font-black mb-3">

            Add Product

          </h1>

          <p className="text-gray-500">

            Create a new fashion product.

          </p>

        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="space-y-8"
        >

          {/* Title */}
          <div>

            <label className="block mb-3 font-semibold">

              Product Title

            </label>

            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="Enter product title"
              className="w-full border border-gray-300 rounded-2xl px-5 py-4 outline-none focus:border-black"
              required
            />

          </div>

          {/* Description */}
          <div>

            <label className="block mb-3 font-semibold">

              Description

            </label>

            <textarea
              rows="5"
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Enter product description"
              className="w-full border border-gray-300 rounded-2xl px-5 py-4 outline-none focus:border-black"
              required
            />

          </div>

          {/* Grid */}
          <div className="grid md:grid-cols-2 gap-8">

            {/* Price */}
            <div>

              <label className="block mb-3 font-semibold">

                Price

              </label>

              <input
                type="number"
                name="price"
                value={formData.price}
                onChange={handleChange}
                placeholder="Enter price"
                className="w-full border border-gray-300 rounded-2xl px-5 py-4 outline-none focus:border-black"
                required
              />

            </div>

            {/* Stock */}
            <div>

              <label className="block mb-3 font-semibold">

                Stock

              </label>

              <input
                type="number"
                name="stock"
                value={formData.stock}
                onChange={handleChange}
                placeholder="Enter stock"
                className="w-full border border-gray-300 rounded-2xl px-5 py-4 outline-none focus:border-black"
                required
              />

            </div>

          </div>

          {/* Category */}
          <div>

            <label className="block mb-3 font-semibold">

              Category

            </label>

            <input
              type="text"
              name="category"
              value={formData.category}
              onChange={handleChange}
              placeholder="Jackets, Shirts, Shoes..."
              className="w-full border border-gray-300 rounded-2xl px-5 py-4 outline-none focus:border-black"
              required
            />

          </div>

          {/* Upload */}
          <div>

            <label className="block mb-3 font-semibold">

              Product Image

            </label>

            <label className="border-2 border-dashed border-gray-300 rounded-3xl p-12 flex flex-col items-center justify-center text-center cursor-pointer hover:border-black transition">

              <input
                type="file"
                onChange={
                  uploadFileHandler
                }
                className="hidden"
              />

              <div className="space-y-4">

                <h3 className="text-2xl font-bold">

                  Drag & Drop Image

                </h3>

                <p className="text-gray-500">

                  or click to upload

                </p>

              </div>

            </label>

            {/* Uploading */}
            {uploading && (

              <div className="mt-6">

                <p className="font-semibold">

                  Uploading Image...

                </p>

              </div>
            )}

            {/* Preview */}
            {formData.image && (

              <div className="mt-8">

                <img
                  src={formData.image}
                  alt="preview"
                  className="w-72 h-72 object-cover rounded-3xl shadow-lg"
                />

              </div>
            )}

          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={
              loading ||
              uploading
            }
            className="bg-black text-white px-10 py-4 rounded-2xl hover:bg-gray-800 transition text-lg"
          >

            {loading
              ? "Creating Product..."
              : "Add Product"}

          </button>

        </form>

      </div>

    </AdminLayout>
  );
};

export default AddProduct;