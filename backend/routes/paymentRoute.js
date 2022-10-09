const express = require("express");
const {
  processPayment,
  sendStripeApiKey,
} = require("../controller/paymentController");
const Router = express.Router();
const { isAuthenticatedUser } = require("../middlewares/auth");

Router.route("/payment/process").post(isAuthenticatedUser, processPayment);

Router.route("/stripeapikey").get(isAuthenticatedUser, sendStripeApiKey);

module.exports = Router;
