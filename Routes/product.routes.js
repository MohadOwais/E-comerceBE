const express = require("express");
const router = express.Router();
const upload = require("../middleware/multer");
const {
  welcome,
  AddProduct,
  GetProduct,
  UpdateProduct,
  GetProductByid,
} = require("../Controller/product.controller");

router.get("/", welcome);
router.post("/add-products", upload.array("product_img", 10), AddProduct);
router.get("/get-products", GetProduct);
router.get("/get-products-by-id/:id", GetProductByid);
router.put("/update-product/:id", upload.single("product_img"), UpdateProduct);

module.exports = router;
