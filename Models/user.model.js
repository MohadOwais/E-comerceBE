const pool = require("../config/db");
const bcrypt = require("bcryptjs");
module.exports = class User {
  constructor(
    user_first_name,
    user_last_name,
    user_email,
    user_password,
    user_address
  ) {
    this.user_first_name = user_first_name;
    this.user_last_name = user_last_name;
    this.user_email = user_email;
    this.user_password = user_password;
    this.user_address = user_address;
  }
  //  static async Insert(userData) {
  //     try {
  //       console.log("userDATA", userData);

  //       const salt = await bcrypt.genSalt(10);
  //       const hashedPassword = await bcrypt.hash(userData.user_password, salt);

  //       userData.user_password = hashedPassword;

  //       const query = `
  //         INSERT INTO user_table
  //         (user_first_name, user_last_name, user_email, user_password, user_address)
  //         VALUES (?, ?, ?, ?, ?)
  //       `;

  //       const values = [
  //         userData.user_first_name,
  //         userData.user_last_name,
  //         userData.user_email,
  //         userData.user_password,
  //         userData.user_address,
  //       ];

  //       // ✅ Works only if pool = mysql2/promise
  //       const [rows] = await pool.query(query, values);

  //       return rows;
  //     } catch (error) {
  //       console.error("Error in Insert method:", error);
  //       throw error;
  //     }
  //   }
  static async Insert(userData) {
    try {
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(userData.user_password, salt);

      userData.user_password = hashedPassword;

      const query = `
      INSERT INTO user_table 
      (user_first_name, user_last_name, user_email, user_password, user_address) 
      VALUES (?, ?, ?, ?, ?)
    `;

      const values = [
        userData.user_first_name,
        userData.user_last_name,
        userData.user_email,
        userData.user_password,
        userData.user_address,
      ];

      // ✅ Works now because pool = mysql2/promise
      const result = await pool.query(query, values);

      return result;
    } catch (error) {
      console.error("Error in Insert method:", error);
      throw error;
    }
  }

  static async getUser() {
    try {
      const result = await pool.query("select * from user_table");
      return result;
    } catch (error) {
      console.error("Error in Insert method:", error.message);
      throw error;
    }
  }
  static async getUserById(id) {
    try {
      const result = await pool.query("select * from user_table where id=?", [
        id,
      ]);
      return result;
    } catch (error) {
      console.error("Error in Insert method:", error.message);
      throw error;
    }
  }
  // Update User (excluding password)
  static async Update(id, data) {
    try {
      const result = await pool.query(
        `UPDATE user_table 
       SET user_first_name = ?, 
           user_last_name = ?, 
           user_email = ?, 
           user_address = ? 
       WHERE id = ?`,
        [
          data.user_first_name,
          data.user_last_name,
          data.user_email,
          data.user_address,
          id,
        ]
      );
      return result;
    } catch (error) {
      console.error("Error in Update method:", error.message);
      throw error;
    }
  }

  // Update Password only
  static async UpdatePassword(id, newPassword) {
    try {
      const hashedPassword = await bcrypt.hash(newPassword, salt);
      const result = await pool.query(
        "UPDATE user_table SET user_password = ? WHERE id = ?",
        [hashedPassword, id]
      );
      return result;
    } catch (error) {
      console.error("Error in UpdatePassword method:", error.message);
      throw error;
    }
  }

  // Delete User
  static async Delete(id) {
    try {
      const result = await pool.query("DELETE FROM user_table WHERE id = ?", [
        id,
      ]);
      return result;
    } catch (error) {
      console.error("Error in Delete method:", error.message);
      throw error;
    }
  }
};
