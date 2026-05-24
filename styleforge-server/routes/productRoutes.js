import express from "express";

import {
  createProduct,
  getProducts,
} from "../controllers/productController.js";

const router = express.Router();


// Create Product
router.post("/", createProduct);


// Get Products
router.get("/", getProducts);

export default router;