const express = require("express");
const Router = express.Router();
const {
  getAllProducts,
  createProduct,
  updateProduct,
  deleteProduct,
  getProductDetails,
  createProductReview,
  getProductReviews,
  deleteReview,
  getAdminProducts,
} = require("../controller/productController");
const { isAuthenticatedUser, authorizeRoles } = require("../middlewares/auth");

Router.route("/products").get(getAllProducts);

Router.route("/admin/products").get(
  isAuthenticatedUser,
  authorizeRoles("Admin"),
  getAdminProducts
);

Router.route("/admin/product/new").post(
  isAuthenticatedUser,
  authorizeRoles("Admin"),
  createProduct
);

Router.route("/admin/product/:id").put(
  isAuthenticatedUser,
  authorizeRoles("Admin"),
  updateProduct
);

Router.route("/admin/product/:id").delete(
  isAuthenticatedUser,
  authorizeRoles("Admin"),
  deleteProduct
);

Router.route("/product/:id").get(getProductDetails);

Router.route("/review").put(isAuthenticatedUser, createProductReview);

Router.route("/reviews").get(getProductReviews);

Router.route("/reviews").delete(isAuthenticatedUser, deleteReview);

module.exports = Router;
