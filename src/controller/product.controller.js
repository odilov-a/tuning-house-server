const Product = require("../models/Product.js");
const pagination = require("../utils/pagination.js");
const filterByLang = require("../utils/filterByLang.js");

exports.getAllProduct = async (req, res) => {
  try {
    const products = await pagination(Product, req.query);
    const result = filterByLang(
      products.data,
      req.query.lang,
      "title",
      "description",
      "subTitle"
    );
    products.data = result;
    return res.json(products);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

exports.getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.productId);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    return res.json({ data: product });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

exports.filterProduct = async (req, res) => {
  try {
    const { titleUz, titleRu } = req.query;
    let filter = {};
    if (titleUz) {
      filter.titleUz = { $regex: titleUz, $options: "i" };
    }
    if (titleRu) {
      filter.titleRu = { $regex: titleRu, $options: "i" };
    }
    const products = await Product.find(filter);
    return res.json(products);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

exports.createProduct = async (req, res) => {
  try {
    const newProduct = await Product.create({ ...req.body });
    return res.json({ data: newProduct });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

exports.updateProduct = async (req, res) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.productId,
      { ...req.body },
      { new: true }
    );
    if (!updatedProduct) {
      return res.status(404).json({ message: "Product not found" });
    }
    return res.json({ data: updatedProduct });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

exports.deleteProduct = async (req, res) => {
  try {
    const deletedProduct = await Product.findByIdAndDelete(
      req.params.productId
    );
    if (!deletedProduct) {
      return res.status(404).json({ message: "Product not found" });
    }
    return res.json({ message: "Product deleted successfully" });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};
