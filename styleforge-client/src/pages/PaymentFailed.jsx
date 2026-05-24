import {
  Link,
} from "react-router-dom";

import MainLayout
  from "../layouts/MainLayout";

const PaymentFailed = () => {

  return (

    <MainLayout>

      <section className="min-h-[80vh] flex items-center justify-center px-6">

        <div className="bg-white shadow-xl rounded-3xl p-14 text-center max-w-2xl w-full">

          {/* Icon */}
          <div className="w-28 h-28 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-8">

            <span className="text-6xl">

              ❌

            </span>

          </div>

          {/* Content */}
          <h1 className="text-5xl font-black mb-6">

            Payment Failed

          </h1>

          <p className="text-gray-500 text-xl leading-relaxed mb-10">

            Something went wrong while processing
            your payment.

          </p>

          <div className="flex flex-wrap justify-center gap-5">

            <Link
              to="/checkout"
              className="bg-black text-white px-8 py-4 rounded-2xl hover:bg-gray-800 transition"
            >

              Try Again

            </Link>

            <Link
              to="/cart"
              className="border border-black px-8 py-4 rounded-2xl hover:bg-black hover:text-white transition"
            >

              Back To Cart

            </Link>

          </div>

        </div>

      </section>

    </MainLayout>
  );
};

export default PaymentFailed;