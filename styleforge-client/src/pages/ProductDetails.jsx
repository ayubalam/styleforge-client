import { useEffect, useState }
  from "react";

import { useParams }
  from "react-router-dom";

import MainLayout
  from "../layouts/MainLayout";

import API
  from "../services/api";

import { useCart }
  from "../hooks/useCart";

const ProductDetails = () => {

  const { id } = useParams();

  const { addToCart } =
    useCart();

  const [product, setProduct] =
    useState(null);

  // Fetch Product
  useEffect(() => {

    const fetchProduct =
      async () => {

        try {

          const { data } =
            await API.get(
              `/products/${id}`
            );

          setProduct(data);

        } catch (error) {

          console.log(error);
        }
      };

    fetchProduct();

  }, [id]);

  if (!product) {

    return (
      <MainLayout>

        <div className="p-10">
          Loading...
        </div>

      </MainLayout>
    );
  }

  return (

    <MainLayout>

      <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-14">

        {/* Image */}
        <div>

          <img
            src={product.image}
            alt={product.title}
            className="w-full h-[600px] object-cover rounded-2xl shadow-lg"
          />

        </div>

        {/* Content */}
        <div>

          <h1 className="text-5xl font-bold mb-6">

            {product.title}

          </h1>

          <p className="text-gray-600 text-lg mb-6">

            {product.description}

          </p>

          <p className="text-3xl font-bold mb-6">

            ${product.price}

          </p>

          <p className="mb-8">

            Stock:
            {" "}
            {product.stock}

          </p>

          <button
            onClick={() =>
              addToCart(product)
            }
            className="bg-black text-white px-8 py-4 rounded-xl hover:bg-gray-800 transition"
          >

            Add To Cart

          </button>

        </div>

      </div>

    </MainLayout>
  );
};

export default ProductDetails;