import express from "express";

import {
  createProduct,
  getProducts,
  getSingleProduct,
  updateProduct,
  deleteProduct,
} from "../controllers/productController.js";

const router = express.Router();


// Create Product
router.post("/", createProduct);


// Get All Products
router.get("/", getProducts);


// Get Single Product
router.get("/:id", getSingleProduct);


// Update Product
router.put("/:id", updateProduct);


// Delete Product
router.delete("/:id", deleteProduct);

export default router;