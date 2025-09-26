const express = require("express");
const router = express.Router();
const {
  welcome,
  AddUser,
  Getuser,
  EditUser,
  UpdatePassword,
  deleteUser,
  GetuserById,
} = require("../Controller/user.controller");

router.get("/", welcome);
router.post("/add-user", AddUser);
router.get("/get-user", Getuser);
router.get("/get-user-id/:id", GetuserById);
router.put("/update-user/:id", EditUser);
router.put("/update-password-user/:id", UpdatePassword);
router.delete("/user-delete", deleteUser);
module.exports = router;
