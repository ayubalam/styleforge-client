import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {

  return (

    <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition duration-300">

      {/* Image */}
      <img
        src={product.image}
        alt={product.title}
        className="h-72 w-full object-cover"
      />

      {/* Content */}
      <div className="p-5">

        <h2 className="text-2xl font-semibold mb-2">

          {product.title}

        </h2>

        <p className="text-gray-500 mb-3">

          {product.description}

        </p>

        <div className="flex items-center justify-between">

          <span className="text-xl font-bold">

            ${product.price}

          </span>

          <Link
            to={`/product/${product._id}`}
            className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition"
          >
            View
          </Link>

        </div>

      </div>

    </div>
  );
};

export default ProductCard;