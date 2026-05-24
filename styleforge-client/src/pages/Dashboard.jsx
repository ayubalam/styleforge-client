import {
  useEffect,
  useState,
} from "react";

import MainLayout
  from "../layouts/MainLayout";

import API
  from "../services/api";

import {
  useAuth,
} from "../hooks/useAuth";

const Dashboard = () => {

  const {
    user,
  } = useAuth();

  const [orders, setOrders] =
    useState([]);

  // Fetch Orders
  useEffect(() => {

    const fetchOrders =
      async () => {

        try {

          const { data } =
            await API.get(
              "/orders/myorders"
            );

          setOrders(data);

        } catch (error) {

          console.log(error);
        }
      };

    fetchOrders();

  }, []);

  return (

    <MainLayout>

      <section className="max-w-7xl mx-auto px-6 py-20">

        {/* User Info */}
        <div className="bg-white rounded-3xl shadow-md p-10 mb-16">

          <h1 className="text-5xl font-black mb-4">

            Dashboard

          </h1>

          <p className="text-xl text-gray-600">

            Welcome back,
            {" "}
            <span className="font-bold">

              {user?.name}

            </span>

          </p>

        </div>

        {/* Orders */}
        <div>

          <h2 className="text-4xl font-black mb-10">

            My Orders

          </h2>

          {orders.length === 0 ? (

            <div className="bg-white rounded-3xl shadow-md p-16 text-center">

              <h3 className="text-3xl font-bold mb-4">

                No Orders Yet

              </h3>

              <p className="text-gray-500">

                Your orders will appear here.

              </p>

            </div>

          ) : (

            <div className="space-y-8">

              {orders.map(
                (order) => (

                  <div
                    key={order._id}
                    className="bg-white rounded-3xl shadow-md p-8"
                  >

                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5 mb-6">

                      <div>

                        <h3 className="text-2xl font-bold">

                          Order ID:
                        </h3>

                        <p className="text-gray-500">

                          {order._id}

                        </p>

                      </div>

                      <div className="text-right">

                        <p className="text-3xl font-bold">

                          ${order.totalPrice}

                        </p>

                        <p className="text-gray-500">

                          {new Date(
                            order.createdAt
                          ).toLocaleDateString()}
                        </p>

                      </div>

                    </div>

                    {/* Items */}
                    <div className="space-y-5">

                      {order.orderItems.map(
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

                            <div>

                              <h4 className="font-bold text-xl">

                                {item.title}

                              </h4>

                              <p className="text-gray-500">

                                Qty:
                                {" "}
                                {item.qty}

                              </p>

                            </div>

                          </div>
                        )
                      )}

                    </div>

                  </div>
                )
              )}

            </div>
          )}

        </div>

      </section>

    </MainLayout>
  );
};

export default Dashboard;