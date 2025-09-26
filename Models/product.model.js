const pool = require("../config/db");
const bcrypt = require("bcryptjs");
module.exports = class User {
  constructor(product_name, product_description, product_price, product_img) {
    this.product_name = product_name;
    this.product_description = product_description;
    this.product_price = product_price;
    this.product_img = product_img;
  }
  static async Insert(data) {
    try {
      const result = await pool.query(
        "INSERT INTO user_product (product_name, product_description, product_price, product_img) VALUES (?,?,?,?)",
        [
          data.product_name,
          data.product_description,
          data.product_price,
          JSON.stringify(data.product_img), // convert array to string
        ]
      );

      return result;
    } catch (error) {
      console.error("Error in Insert method:", error.message);
      throw error;
    }
  }
  static async GetProduct() {
    try {
      const result = await pool.query("select * from user_product");
      return result;
    } catch (error) {
      console.error("Error in Insert method:", error.message);
      throw error;
    }
  }
  static async GetProductBYid(id) {
    try {
      const result = await pool.query("select * from user_product where id=?", [
        id,
      ]);
      return result;
    } catch (error) {
      console.error("Error in Insert method:", error.message);
      throw error;
    }
  }
  static async Update(id, data) {
    console.log("id", id);
    console.log("update the img", data);
    try {
      const result = await pool.query(
        `UPDATE user_product 
   SET product_name = ?, 
       product_description = ?, 
       product_price = ?, 
       product_img = ? 
   WHERE id = ?`,
        [
          data.product_name,
          data.product_description,
          data.product_price,
          JSON.stringify(data.product_img), // <-- convert array to JSON string
          id,
        ]
      );

      return result;
    } catch (error) {
      console.error("Error in Update method:", error.message);
      throw error;
    }
  }
  // Delete User
  static async Delete(id) {
    try {
      const result = await pool.query("DELETE FROM user_product WHERE id = ?", [
        id,
      ]);
      return result;
    } catch (error) {
      console.error("Error in Delete method:", error.message);
      throw error;
    }
  }
};
