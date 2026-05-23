const ProductCard = () => {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition duration-300">

      <img
        src="https://images.unsplash.com/photo-1521572267360-ee0c2909d518"
        alt="product"
        className="h-72 w-full object-cover"
      />

      <div className="p-5">

        <h2 className="text-2xl font-semibold mb-2">
          Men's Jacket
        </h2>

        <p className="text-gray-500 mb-3">
          Premium stylish jacket for men.
        </p>

        <div className="flex items-center justify-between">

          <span className="text-xl font-bold">
            $120
          </span>

          <button className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition">
            Add To Cart
          </button>

        </div>

      </div>

    </div>
  );
};

export default ProductCard;