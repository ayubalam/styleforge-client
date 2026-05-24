import express
  from "express";

import multer
  from "multer";

import cloudinary
  from "../config/cloudinary.js";

const router =
  express.Router();


// Multer Storage
const storage =
  multer.memoryStorage();

const upload =
  multer({
    storage,
  });


// Upload Route
router.post(
  "/",
  upload.single("image"),
  async (req, res) => {

    try {

      const file =
        req.file;

      // Convert Buffer To Base64
      const base64 =
        `data:${file.mimetype};base64,${file.buffer.toString("base64")}`;

      // Upload To Cloudinary
      const result =
        await cloudinary.uploader.upload(
          base64,
          {
            folder:
              "styleforge",
          }
        );

      res.json({
        imageUrl:
          result.secure_url,
      });

    } catch (error) {

      res.status(500).json({
        message:
          error.message,
      });
    }
  }
);

export default router;