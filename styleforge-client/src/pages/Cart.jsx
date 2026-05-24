import {
  Link,
} from "react-router-dom";

import MainLayout
  from "../layouts/MainLayout";

import {
  useCart,
} from "../hooks/useCart";

const Cart = () => {

  const {
    cartItems,
    removeFromCart,
  } = useCart();

  // Total
  const totalPrice =
    cartItems.reduce(
      (acc, item) =>
        acc +
        item.price *
        item.qty,
      0
    );

  return (

    <MainLayout>

      <section className="max-w-7xl mx-auto px-6 py-20">

        {/* Heading */}
        <div className="mb-14">

          <h1 className="text-5xl font-black mb-4">

            Shopping Cart

          </h1>

          <p className="text-gray-500 text-lg">

            Review your selected products.

          </p>

        </div>

        {/* Empty */}
        {cartItems.length === 0 ? (

          <div className="text-center py-20">

            <h2 className="text-4xl font-bold mb-6">

              Your Cart Is Empty

            </h2>

            <Link
              to="/products"
              className="bg-black text-white px-8 py-4 rounded-2xl"
            >

              Continue Shopping

            </Link>

          </div>

        ) : (

          <div className="grid lg:grid-cols-3 gap-12">

            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-8">

              {cartItems.map(
                (item) => (

                  <div
                    key={item._id}
                    className="bg-white rounded-3xl shadow-md p-6 flex flex-col md:flex-row gap-6"
                  >

                    {/* Image */}
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full md:w-40 h-40 object-cover rounded-2xl"
                    />

                    {/* Content */}
                    <div className="flex-1">

                      <h2 className="text-2xl font-bold mb-3">

                        {item.title}

                      </h2>

                      <p className="text-gray-500 mb-3">

                        Quantity:
                        {" "}
                        {item.qty}

                      </p>

                      <p className="text-2xl font-bold">

                        $
                        {item.price}

                      </p>

                    </div>

                    {/* Remove */}
                    <button
                      onClick={() =>
                        removeFromCart(
                          item._id
                        )
                      }
                      className="bg-red-500 text-white px-5 py-3 rounded-2xl hover:bg-red-600 transition h-fit"
                    >

                      Remove

                    </button>

                  </div>
                )
              )}

            </div>

            {/* Summary */}
            <div className="bg-white shadow-lg rounded-3xl p-8 h-fit">

              <h2 className="text-3xl font-bold mb-8">

                Order Summary

              </h2>

              <div className="space-y-5">

                <div className="flex justify-between">

                  <span>
                    Total Items
                  </span>

                  <span>
                    {cartItems.length}
                  </span>

                </div>

                <div className="flex justify-between">

                  <span>
                    Shipping
                  </span>

                  <span>
                    Free
                  </span>

                </div>

                <div className="border-t pt-5 flex justify-between text-2xl font-bold">

                  <span>Total</span>

                  <span>
                    ${totalPrice}
                  </span>

                </div>

              </div>

              {/* Checkout */}
              <Link
                to="/checkout"
                className="bg-black text-white w-full py-4 rounded-2xl mt-10 block text-center hover:bg-gray-800 transition"
              >

                Proceed To Checkout

              </Link>

            </div>

          </div>
        )}

      </section>

    </MainLayout>
  );
};

export default Cart;