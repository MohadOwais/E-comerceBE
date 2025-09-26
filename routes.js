const express = require("express");
const router = express.Router();

//Routes
const usersRoutes = require("./Routes/user.routes");
const ProductRoutes = require("./Routes/product.routes");
const addtocartRoutes = require("./Routes/addtocart.routes");
const login = require("./Routes/Sign.routes");
router.get("/", async (req, res) => {
  res.send({ app_version: process.env.APP_VER_PREFIX });
});
router.use("/user", usersRoutes);
router.use("/product", ProductRoutes);
router.use("/add-to", addtocartRoutes);
router.use("/auth", login);

module.exports = router;
