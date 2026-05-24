import express
  from "express";

import {
  createPayment,
} from "../controllers/paymentController.js";

import {
  protect,
} from "../middleware/authMiddleware.js";

const router =
  express.Router();

router.post(
  "/create-order",
  protect,
  createPayment
);

export default router;