const db = require("../config/db");
const Signin = require("../Models/Sign.modals");

const welcome = async (req, res) => {
  res.send({
    message: `Auth Home Page`,
  });
};

const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    console.log("email", req.body);
    const result = await Signin.auth({ email, password });

    if (!result) {
      return res.status(402).json({ message: "Incorrect credentials!" });
    }

    const { token, userId, userName, doctorId, Active, api_key, ids } = result;
    res.status(200).json({
      message: "Welcome to E-Commerce",
      response: {
        token,
        userId,
        userName,
      },
    });
  } catch (error) {
    console.error("Error in login:", error);

    if (error.message === "Authentication failed.") {
      return res.status(401).json({ message: "Incorrect credentials!" });
    }

    res.status(500).json({
      message: "An error occurred during login",
      error: error.message,
    });
  }
};

module.exports = {
  welcome,
  login,
};
