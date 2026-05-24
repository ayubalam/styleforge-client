import razorpay
  from "../config/razorpay.js";


// Create Payment Order
export const createPayment =
  async (req, res) => {

    try {

      const {
        amount,
      } = req.body;

      // Razorpay Options
      const options = {

        amount:
          Number(amount * 100),

        currency:
          "INR",

        receipt:
          `receipt_${Date.now()}`,
      };

      // Create Order
      const order =
        await razorpay.orders.create(
          options
        );

      res.status(200).json(
        order
      );

    } catch (error) {

      console.log(
        error
      );

      res.status(500).json({
        message:
          error.message,
      });
    }
  };