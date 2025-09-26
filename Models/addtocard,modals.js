const pool = require("../config/db");
const bcrypt = require("bcryptjs");
module.exports = class ADDTOCART {
  constructor(
    user_first_name,
    user_last_name,
    user_email,
    user_password,
    user_address,
    userId,
    productId,
    Qty,
    total_price
  ) {
    this.user_first_name = user_first_name;
    this.user_last_name = user_last_name;
    this.user_email = user_email;
    this.user_password = user_password;
    this.user_address = user_address;
    this.userId = userId;
    this.productId = productId;
    this.Qty = Qty;
    this.total_price = total_price;
  }
  static async InsertUserAndCart(data) {
    try {
      const userResult = await pool.query(
        "INSERT INTO user_table (user_first_name, user_last_name, user_email, user_address) VALUES (?,?,?,?)",
        [
          data.user_first_name,
          data.user_last_name,
          data.user_email,
          // hashedPassword,
          data.user_address,
        ]
      );

      const userId = userResult.insertId; // get inserted user's ID

      // Insert into add_to_cart table
      const cartResult = await pool.query(
        "INSERT INTO add_to_cart (userId, productId, Qty, total_price) VALUES (?,?,?,?)",
        [userId, data.productId, data.Qty, data.total_price]
      );

      return { userId, cartResult };
    } catch (error) {
      console.error("Error in InsertUserAndCart method:", error.message);
      throw error;
    }
  }
  static async getCart() {
    try {
      const result = await pool.query("select * from add_to_cart");
      return result;
    } catch (error) {
      console.error("Error in Insert method:", error.message);
      throw error;
    }
  }
};
