import {
  Link,
} from "react-router-dom";

import MainLayout
  from "../layouts/MainLayout";

const PaymentSuccess = () => {

  return (

    <MainLayout>

      <section className="min-h-[80vh] flex items-center justify-center px-6">

        <div className="bg-white shadow-xl rounded-3xl p-14 text-center max-w-2xl w-full">

          {/* Icon */}
          <div className="w-28 h-28 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8">

            <span className="text-6xl">

              ✅

            </span>

          </div>

          {/* Content */}
          <h1 className="text-5xl font-black mb-6">

            Payment Successful

          </h1>

          <p className="text-gray-500 text-xl leading-relaxed mb-10">

            Your order has been placed successfully.
            Thank you for shopping with STYLEFORGE.

          </p>

          <div className="flex flex-wrap justify-center gap-5">

            <Link
              to="/dashboard"
              className="bg-black text-white px-8 py-4 rounded-2xl hover:bg-gray-800 transition"
            >

              View Orders

            </Link>

            <Link
              to="/products"
              className="border border-black px-8 py-4 rounded-2xl hover:bg-black hover:text-white transition"
            >

              Continue Shopping

            </Link>

          </div>

        </div>

      </section>

    </MainLayout>
  );
};

export default PaymentSuccess;