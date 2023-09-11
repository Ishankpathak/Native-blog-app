const express = require("express");
const {
  registerController,
  loginController,
  updateUserController,
  requireSignIn,
} = require("../controllers/userController");

//router object
const router = express.Router();

//routes

//Register route
router.post("/register", registerController);

//Register route
router.post("/login", loginController);

//update || PUT
router.put("/update-user", requireSignIn, updateUserController);

//export
module.exports = router;
