const ADDTOCART = require("../Models/addtocard,modals"); // ✅ check filename

const Addtocart = async (req, res, next) => {
  try {
    const {
      user_first_name,
      user_last_name,
      user_email,
      user_password,
      user_address,
      productId,
      Qty,
      total_price,
    } = req.body;

    const data = {
      user_first_name,
      user_last_name,
      user_email,
      user_password,
      user_address,
      productId,
      Qty,
      total_price,
    };
    const result = await ADDTOCART.InsertUserAndCart(data);

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

const GettoCart = async (req, res, next) => {
  try {
    const result = await ADDTOCART.getCart();
    res.status(201).json({
      message: "GettoCart Fetched successfully!",
      data: result,
    });
  } catch (error) {
    console.error("Failed to Fetched GettoCart:", error);
    res.status(500).json({
      message: "Failed to Fetched GettoCart",
      error: error.message,
    });
  }
};

module.exports = { Addtocart, GettoCart };
