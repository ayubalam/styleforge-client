import express from "express";

import {
  createProduct,
  getProducts,
  getSingleProduct,
} from "../controllers/productController.js";

const router = express.Router();


// Create Product
router.post("/", createProduct);


// Get All Products
router.get("/", getProducts);


// Get Single Product
router.get("/:id", getSingleProduct);

export default router;