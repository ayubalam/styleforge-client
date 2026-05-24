import Order
  from "../models/orderModel.js";


// Create Order
export const createOrder =
  async (req, res) => {

    try {

      const {
        orderItems,
        shippingAddress,
        totalPrice,
      } = req.body;

      const order =
        new Order({

          user:
            req.user._id,

          orderItems,

          shippingAddress,

          totalPrice,
        });

      const createdOrder =
        await order.save();

      res.status(201).json(
        createdOrder
      );

    } catch (error) {

      res.status(500).json({
        message:
          error.message,
      });
    }
  };


// Get My Orders
export const getMyOrders =
  async (req, res) => {

    try {

      const orders =
        await Order.find({
          user:
            req.user._id,
        });

      res.json(orders);

    } catch (error) {

      res.status(500).json({
        message:
          error.message,
      });
    }
  };