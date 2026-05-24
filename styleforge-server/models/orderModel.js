import mongoose
  from "mongoose";

const orderSchema =
  new mongoose.Schema(
    {

      user: {
        type:
          mongoose.Schema.Types.ObjectId,
        ref: "User",
      },

      orderItems: [
        {
          title: String,
          image: String,
          price: Number,
          qty: Number,
          product: {
            type:
              mongoose.Schema.Types.ObjectId,
            ref: "Product",
          },
        },
      ],

      shippingAddress: {
        fullName: String,
        address: String,
        city: String,
        postalCode: String,
        country: String,
      },

      totalPrice: {
        type: Number,
        required: true,
      },

      isPaid: {
        type: Boolean,
        default: false,
      },

      paidAt: Date,
    },
    {
      timestamps: true,
    }
  );

const Order =
  mongoose.model(
    "Order",
    orderSchema
  );

export default Order;