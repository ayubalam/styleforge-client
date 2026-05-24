import razorpay
  from "../config/razorpay.js";


// Create Razorpay Order
export const createPayment =
  async (req, res) => {

    try {

      const {
        amount,
      } = req.body;

      const options = {

        amount:
          amount * 100,

        currency: "INR",

        receipt:
          `receipt_${Date.now()}`,
      };

      const order =
        await razorpay.orders.create(
          options
        );

      res.json(order);

    } catch (error) {

      res.status(500).json({
        message:
          error.message,
      });
    }
  };