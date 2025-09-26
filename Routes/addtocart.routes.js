const express = require("express");
const router = express.Router();
const { Addtocart, GettoCart } = require("../Controller/addtocart.controller");

router.post("/add-to-cart", Addtocart);
router.get("/get-to-cart", GettoCart);

module.exports = router;
