const pool = require("../config/db");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const cryptoService = require("../services/crypto.service");

module.exports = class Signin {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }

  static async auth(data) {
    try {
      // Fetch user by email
      const [rows] = await pool.query(
        "SELECT * FROM user_table WHERE user_email = ?",
        [data.email]
      );

      if (!rows || rows.length === 0) {
        return { success: false, message: "User not found." };
      }

      const user = rows[0];

      // Compare passwords
      const isMatch = await bcrypt.compare(data.password, user.user_password);
      if (!isMatch) {
        return { success: false, message: "Incorrect password." };
      }

      // Encrypt user ID
      const encId = encodeURIComponent(
        await cryptoService.encrypt(`${user.id}`, "authentication")
      );

      // Generate JWT token
      const token = jwt.sign(
        {
          email: user.user_email,
          userId: encId,
          userName: `${user.user_first_name} ${user.user_last_name}`,
        },
        process.env.APP_JWT_SECRET_KEY || "default_secret",
        { expiresIn: "24h" }
      );

      return {
        success: true,
        token,
        userId: encId,
        userName: `${user.user_first_name} ${user.user_last_name}`,
      };
    } catch (err) {
      console.error("Authentication error:", err.message);
      return { success: false, message: "Authentication failed." };
    }
  }
};
