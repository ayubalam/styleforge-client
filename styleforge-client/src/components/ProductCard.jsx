import {
  Link,
} from "react-router-dom";

const ProductCard = ({
  product,
}) => {

  return (

    <div className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition duration-300 group">

      {/* Image */}
      <div className="overflow-hidden">

        <img
          src={product.image}
          alt={product.title}
          className="w-full h-80 object-cover group-hover:scale-105 transition duration-500"
        />

      </div>

      {/* Content */}
      <div className="p-6">

        {/* Category */}
        <p className="text-sm text-gray-500 mb-2 uppercase tracking-wide">

          {product.category}

        </p>

        {/* Title */}
        <h2 className="text-2xl font-bold mb-3 line-clamp-1">

          {product.title}

        </h2>

        {/* Description */}
        <p className="text-gray-500 mb-5 line-clamp-2">

          {product.description}

        </p>

        {/* Bottom */}
        <div className="flex items-center justify-between">

          {/* Price */}
          <span className="text-2xl font-bold text-black">

            ${product.price}

          </span>

          {/* Button */}
          <Link
            to={`/product/${product._id}`}
            className="bg-black text-white px-5 py-2 rounded-xl hover:bg-gray-800 transition"
          >

            View Details

          </Link>

        </div>

      </div>

    </div>
  );
};

export default ProductCard;