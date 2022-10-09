const express = require("express");
const Router = express.Router();
const {
  newOrder,
  getSingleOrder,
  myOrder,
  getAllOrders,
  updateOrder,
  deleteOrder,
} = require("../controller/orderController");
const { isAuthenticatedUser, authorizeRoles } = require("../middlewares/auth");

Router.route("/order/new").post(isAuthenticatedUser, newOrder);

Router.route("/order/:id").get(isAuthenticatedUser, getSingleOrder);

Router.route("/orders/me").get(isAuthenticatedUser, myOrder);

Router.route("/admin/orders").get(
  isAuthenticatedUser,
  authorizeRoles("Admin"),
  getAllOrders
);

Router.route("/admin/order/:id").put(
  isAuthenticatedUser,
  authorizeRoles("Admin"),
  updateOrder
);

Router.route("/admin/order/:id").delete(
  isAuthenticatedUser,
  authorizeRoles("Admin"),
  deleteOrder
);

module.exports = Router;
