import jwt
  from "jsonwebtoken";

import User
  from "../models/userModel.js";


// Protect Routes
export const protect =
  async (req, res, next) => {

    let token;

    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith(
        "Bearer"
      )
    ) {

      try {

        token =
          req.headers.authorization.split(
            " "
          )[1];

        // Verify Token
        const decoded =
          jwt.verify(
            token,
            process.env.JWT_SECRET
          );

        // Get User
        req.user =
          await User.findById(
            decoded.id
          ).select("-password");

        next();

      } catch (error) {

        res.status(401);

        throw new Error(
          "Not authorized"
        );
      }
    }

    if (!token) {

      res.status(401);

      throw new Error(
        "No token"
      );
    }
  };


// Admin Middleware
export const admin =
  (req, res, next) => {

    if (
      req.user &&
      req.user.role === "admin"
    ) {

      next();

    } else {

      res.status(401);

      throw new Error(
        "Admin only"
      );
    }
  };