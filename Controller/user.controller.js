const User = require("../Models/user.model");

const welcome = async (req, res) => {
  res.send({
    message: "Home Page",
  });
};
const AddUser = async (req, res) => {
  try {
    const {
      user_first_name,
      user_last_name,
      user_email,
      user_password,
      user_address,
    } = req.body;

    console.log("req.body", req.body);

    // Build user object
    const data = {
      user_first_name,
      user_last_name,
      user_email,
      user_password,
      user_address,
    };

    const result = await User.Insert(data);
    // console.log("");

    res.status(201).json({
      message: "User created successfully!",
      data: result,
    });
  } catch (error) {
    console.error("Failed to create user:", error);
    res.status(500).json({
      message: "Failed to create user",
      error: error.message,
    });
  }
};
const Getuser = async (req, res, next) => {
  try {
    const result = await User.getUser();
    res.status(201).json({
      message: "User Fetched successfully!",
      data: result,
    });
  } catch (error) {
    console.error("Failed to Fetched user:", error);
    res.status(500).json({
      message: "Failed to Fetched user",
      error: error.message,
    });
  }
};
const EditUser = async (req, res, next) => {
  try {
    const { id } = req.params;

    const { user_first_name, user_last_name, user_email, user_address } =
      req.body;

    const data = {
      user_first_name,
      user_last_name,
      user_email,
      user_address,
    };

    const result = await User.Update(id, data);

    res.status(200).json({
      message: "User updated successfully!",
      data: result,
    });
  } catch (error) {
    console.error("Failed to update user:", error);
    res.status(500).json({
      message: "Failed to update user",
      error: error.message,
    });
  }
};
const UpdatePassword = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { user_password } = req.body;

    if (!user_password) {
      return res.status(400).json({ message: "Password is required" });
    }

    const result = await User.UpdatePassword(id, user_password);

    res.status(200).json({
      message: "Password updated successfully!",
      data: result,
    });
  } catch (error) {
    console.error("Failed to update password:", error);
    res.status(500).json({
      message: "Failed to update password",
      error: error.message,
    });
  }
};
const deleteUser = async (req, res, next) => {
  try {
    const { id } = req.params;

    const result = await User.Delete(id);

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({
      message: "User deleted successfully!",
      data: result,
    });
  } catch (error) {
    console.error("Failed to delete user:", error);
    res.status(500).json({
      message: "Failed to delete user",
      error: error.message,
    });
  }
};
const GetuserById = async (req, res, next) => {
  try {
    const id = req.params.id;

    const result = await User.getUserById(id);
    res.status(201).json({
      message: "User Fetched successfully!",
      data: result,
    });
  } catch (error) {
    console.error("Failed to Fetched user:", error);
    res.status(500).json({
      message: "Failed to Fetched user",
      error: error.message,
    });
  }
};
module.exports = {
  welcome,
  AddUser,
  Getuser,
  EditUser,
  UpdatePassword,
  deleteUser,
  GetuserById,
};
