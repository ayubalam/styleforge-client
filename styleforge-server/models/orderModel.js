import mongoose
  from "mongoose";

const orderSchema =
  new mongoose.Schema(
    {

      // User
      user: {
        type:
          mongoose.Schema.Types.ObjectId,

        ref: "User",

        required: true,
      },

      // Ordered Products
      orderItems: [
        {
          title: {
            type: String,
            required: true,
          },

          image: {
            type: String,
            required: true,
          },

          price: {
            type: Number,
            required: true,
          },

          qty: {
            type: Number,
            required: true,
          },

          product: {
            type:
              mongoose.Schema.Types.ObjectId,

            ref: "Product",

            required: true,
          },
        },
      ],

      // Shipping Address
      shippingAddress: {

        fullName: {
          type: String,
          required: true,
        },

        address: {
          type: String,
          required: true,
        },

        city: {
          type: String,
          required: true,
        },

        postalCode: {
          type: String,
          required: true,
        },

        country: {
          type: String,
          required: true,
        },
      },

      // Total Price
      totalPrice: {
        type: Number,
        required: true,
      },

      // Razorpay Payment Result
      paymentResult: {

        razorpayPaymentId: {
          type: String,
        },
      },

      // Payment Status
      isPaid: {
        type: Boolean,
        default: false,
      },

      paidAt: {
        type: Date,
      },
    },
    {
      timestamps: true,
    }
  );


// Prevent Overwrite Error
const Order =
  mongoose.models.Order ||
  mongoose.model(
    "Order",
    orderSchema
  );

export default Order;