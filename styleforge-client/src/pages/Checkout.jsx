import {
  useState,
} from "react";

import {
  useNavigate,
} from "react-router-dom";

import MainLayout
  from "../layouts/MainLayout";

import {
  useCart,
} from "../hooks/useCart";

import API
  from "../services/api";

const Checkout = () => {

  const navigate =
    useNavigate();

  const {
    cartItems,
    clearCart,
  } = useCart();

  const [shippingAddress,
    setShippingAddress] =
    useState({
      fullName: "",
      address: "",
      city: "",
      postalCode: "",
      country: "",
    });

  // Total Price
  const totalPrice =
    cartItems.reduce(
      (acc, item) =>
        acc +
        item.price *
        item.qty,
      0
    );

  // Handle Input
  const handleChange =
    (e) => {

      setShippingAddress({
        ...shippingAddress,
        [e.target.name]:
          e.target.value,
      });
    };

  // Place Order
  const handleSubmit =
    async (e) => {

      e.preventDefault();

      try {

        await API.post(
          "/orders",
          {
            orderItems:
              cartItems,

            shippingAddress,

            totalPrice,
          }
        );

        clearCart();

        navigate(
          "/dashboard"
        );

      } catch (error) {

        console.log(error);
      }
    };

  return (

    <MainLayout>

      <section className="max-w-6xl mx-auto px-6 py-20">

        <div className="grid lg:grid-cols-2 gap-16">

          {/* Shipping Form */}
          <div>

            <h1 className="text-5xl font-black mb-10">

              Checkout

            </h1>

            <form
              onSubmit={handleSubmit}
              className="space-y-6"
            >

              <input
                type="text"
                name="fullName"
                placeholder="Full Name"
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-2xl px-5 py-4 outline-none"
                required
              />

              <input
                type="text"
                name="address"
                placeholder="Address"
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-2xl px-5 py-4 outline-none"
                required
              />

              <input
                type="text"
                name="city"
                placeholder="City"
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-2xl px-5 py-4 outline-none"
                required
              />

              <input
                type="text"
                name="postalCode"
                placeholder="Postal Code"
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-2xl px-5 py-4 outline-none"
                required
              />

              <input
                type="text"
                name="country"
                placeholder="Country"
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-2xl px-5 py-4 outline-none"
                required
              />

              <button
                type="submit"
                className="bg-black text-white px-8 py-4 rounded-2xl hover:bg-gray-800 transition w-full"
              >

                Place Order

              </button>

            </form>

          </div>

          {/* Order Summary */}
          <div className="bg-white shadow-lg rounded-3xl p-10 h-fit">

            <h2 className="text-3xl font-bold mb-8">

              Order Summary

            </h2>

            <div className="space-y-6">

              {cartItems.map(
                (item) => (

                  <div
                    key={item._id}
                    className="flex items-center gap-5"
                  >

                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-24 h-24 object-cover rounded-2xl"
                    />

                    <div className="flex-1">

                      <h3 className="font-bold">

                        {item.title}

                      </h3>

                      <p className="text-gray-500">

                        Qty:
                        {" "}
                        {item.qty}

                      </p>

                    </div>

                    <p className="font-bold">

                      $
                      {item.price *
                        item.qty}

                    </p>

                  </div>
                )
              )}

            </div>

            {/* Total */}
            <div className="border-t mt-10 pt-6 flex justify-between text-2xl font-bold">

              <span>Total</span>

              <span>
                ${totalPrice}
              </span>

            </div>

          </div>

        </div>

      </section>

    </MainLayout>
  );
};

export default Checkout;