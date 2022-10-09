const express = require("express");
const Router = express.Router();
const {
  registerUser,
  loginUser,
  logoutUser,
  forgotPassword,
  resetPassword,
  getUserDetails,
  updatePassword,
  updateProfile,
  getAllUser,
  getSingleUser,
  updateUserRole,
  deleteUser,
} = require("../controller/userController");

const { isAuthenticatedUser, authorizeRoles } = require("../middlewares/auth");

Router.route("/register").post(registerUser);

Router.route("/login").post(loginUser);

Router.route("/logout").get(logoutUser);

Router.route("/password/forgot").post(forgotPassword);

Router.route("/password/reset/:token").put(resetPassword);

Router.route("/me").get(isAuthenticatedUser, getUserDetails);

Router.route("/password/update").put(isAuthenticatedUser, updatePassword);

Router.route("/me/update").put(isAuthenticatedUser, updateProfile);

Router.route("/admin/users").get(
  isAuthenticatedUser,
  authorizeRoles("Admin"),
  getAllUser
);

Router.route("/admin/user/:id").get(
  isAuthenticatedUser,
  authorizeRoles("Admin"),
  getSingleUser
);

Router.route("/admin/user/:id").put(
  isAuthenticatedUser,
  authorizeRoles("Admin"),
  updateUserRole
);

Router.route("/admin/user/:id").delete(
  isAuthenticatedUser,
  authorizeRoles("Admin"),
  deleteUser
);

module.exports = Router;
