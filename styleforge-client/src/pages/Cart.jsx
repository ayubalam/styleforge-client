import MainLayout
  from "../layouts/MainLayout";

import { useCart }
  from "../hooks/useCart";

const Cart = () => {

  const {
    cartItems,
    removeFromCart,
  } = useCart();

  // Total Price
  const totalPrice =
    cartItems.reduce(
      (acc, item) =>
        acc + item.price * item.qty,
      0
    );

  return (

    <MainLayout>

      <div className="max-w-7xl mx-auto px-6 py-20">

        <h1 className="text-5xl font-bold mb-10">
          Shopping Cart
        </h1>

        {cartItems.length === 0 ? (

          <p>Your cart is empty.</p>

        ) : (

          <div className="space-y-6">

            {cartItems.map((item) => (

              <div
                key={item._id}
                className="flex items-center justify-between bg-white shadow-md rounded-xl p-5"
              >

                {/* Left */}
                <div className="flex items-center gap-5">

                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-28 h-28 object-cover rounded-lg"
                  />

                  <div>

                    <h2 className="text-2xl font-bold">

                      {item.title}

                    </h2>

                    <p className="text-gray-500">

                      Qty:
                      {" "}
                      {item.qty}

                    </p>

                  </div>

                </div>

                {/* Right */}
                <div className="text-right">

                  <p className="text-2xl font-bold mb-4">

                    $
                    {item.price * item.qty}

                  </p>

                  <button
                    onClick={() =>
                      removeFromCart(
                        item._id
                      )
                    }
                    className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
                  >

                    Remove

                  </button>

                </div>

              </div>
            ))}

            {/* Total */}
            <div className="text-right mt-10">

              <h2 className="text-4xl font-bold">

                Total:
                {" "}
                ${totalPrice}

              </h2>

            </div>

          </div>
        )}

      </div>

    </MainLayout>
  );
};

export default Cart;