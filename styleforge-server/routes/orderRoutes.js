import express
  from "express";

import {
  createOrder,
  getMyOrders,
} from "../controllers/orderController.js";

import {
  protect,
} from "../middleware/authMiddleware.js";

const router =
  express.Router();


// Create Order
router.post(
  "/",
  protect,
  createOrder
);


// Get My Orders
router.get(
  "/myorders",
  protect,
  getMyOrders
);

export default router;