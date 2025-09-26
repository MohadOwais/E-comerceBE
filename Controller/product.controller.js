const Product = require("../Models/product.model");
const pool = require("../config/db");
const path = require("path");
const fs = require("fs");
const welcome = async (req, res) => {
  res.send({
    message: "Home Page",
  });
};

const AddProduct = async (req, res, next) => {
  try {
    const { product_name, product_description, product_price } = req.body;

    const product_img = req.files ? req.files.map((file) => file.filename) : [];

    const data = {
      product_name,
      product_description,
      product_price,
      product_img,
    };

    const result = await Product.Insert(data);

    res.status(201).json({
      message: "Product added successfully!",
      data: result,
    });
  } catch (error) {
    console.error("Failed to add product:", error);
    res.status(500).json({
      message: "Failed to add product",
      error: error.message,
    });
  }
};

const GetProduct = async (req, res, next) => {
  try {
    const result = await Product.GetProduct();
    res.status(201).json({
      message: "Product Fetched successfully!",
      data: result,
    });
  } catch (error) {
    console.error("Failed to Fetched Product:", error);
    res.status(500).json({
      message: "Failed to Fetched Product",
      error: error.message,
    });
  }
};
const GetProductByid = async (req, res, next) => {
  try {
    const id = req.params.id;

    const result = await Product.GetProductBYid(id);
    res.status(201).json({
      message: "Product Fetched successfully!",
      data: result,
    });
  } catch (error) {
    console.error("Failed to Fetched Product:", error);
    res.status(500).json({
      message: "Failed to Fetched Product",
      error: error.message,
    });
  }
};

const UpdateProduct = async (req, res, next) => {
  try {
    const id = req.body.id;
    const {
      product_name,
      product_description,
      product_price,
      existing_img,
      delete_img,
    } = req.body;

    // Parse existing and deleted images
    const existingImages = existing_img ? JSON.parse(existing_img) : [];
    const deletedImages = delete_img ? JSON.parse(delete_img) : [];

    // Delete removed files from server
    deletedImages.forEach((filename) => {
      const filePath = path.join(__dirname, "../uploads", filename);
      if (fs.existsSync(filePath)) fs.unlinkSync(filePath);
    });

    // Filter out deleted images from existing images
    let product_img = existingImages.filter(
      (img) => !deletedImages.includes(img)
    );

    // Add new uploaded file if present
    if (req.file) {
      product_img.push(req.file.filename);
    }

    console.log("Final product images:", product_img);

    // Prepare data to update
    const data = {
      product_name,
      product_description,
      product_price,
      product_img,
    };

    // Update database
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
        JSON.stringify(data.product_img),
        id,
      ]
    );

    res.status(200).json({
      message: "Product updated successfully!",
      data: result,
    });
  } catch (error) {
    console.error("Failed to update product:", error);
    res.status(500).json({
      message: "Failed to update product",
      error: error.message,
    });
  }
};

module.exports = {
  welcome,
  AddProduct,
  GetProduct,
  UpdateProduct,
  GetProductByid,
};
