const Category = require("../models/Category.js");
const pagination = require("../utils/pagination.js");

exports.getAllCategory = async (req, res) => {
  try {
    const categories = await pagination(Category, req.query, "subcategories");
    return res.json(categories);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

exports.getCategoryById = async (req, res) => {
  try {
    const category = await Category.findById(req.params.categoryId);
    if (!category) {
      return res.status(404).json({ message: "Category not found" });
    }
    return res.json({ data: category });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

exports.filterCategory = async (req, res) => {
  try {
    const { title } = req.query;
    let filter = {};
    if (title) {
      filter.title = { $regex: title, $options: "i" };
    }
    const categories = await Category.find(filter);
    return res.json(categories);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

exports.createCategory = async (req, res) => {
  try {
    const newCategory = await Category.create({ ...req.body });
    return res.json({ data: newCategory });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

exports.updateCategory = async (req, res) => {
  try {
    const updatedCategory = await Category.findByIdAndUpdate(
      req.params.categoryId,
      { ...req.body },
      { new: true }
    );
    if (!updatedCategory) {
      return res.status(404).json({ message: "Category not found" });
    }
    return res.json({ data: updatedCategory });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

exports.deleteCategory = async (req, res) => {
  try {
    const deletedCategory = await Category.findByIdAndDelete(
      req.params.categoryId
    );
    if (!deletedCategory) {
      return res.status(404).json({ message: "Category not found" });
    }
    return res.json({ message: "Category deleted successfully" });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};
