const Subcategory = require("../models/Subcategory.js");
const pagination = require("../utils/pagination.js");

exports.getAllSubcategory = async (req, res) => {
  try {
    const subcategories = await pagination(Subcategory, req.query);
    return res.json(subcategories);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

exports.getSubcategoryById = async (req, res) => {
  try {
    const subcategory = await Subcategory.findById(req.params.subcategoryId);
    if (!subcategory) {
      return res.status(404).json({ message: "Subcategory not found" });
    }
    return res.json({ data: subcategory });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

exports.filterSubcategory = async (req, res) => {
  try {
    const { title } = req.query;
    let filter = {};
    if (title) {
      filter.title = { $regex: title, $options: "i" };
    }
    const subcategories = await Subcategory.find(filter);
    return res.json(subcategories);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

exports.createSubcategory = async (req, res) => {
  try {
    const newSubcategory = await Subcategory.create({ ...req.body });
    return res.json({ data: newSubcategory });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

exports.updateSubcategory = async (req, res) => {
  try {
    const updatedSubcategory = await Subcategory.findByIdAndUpdate(
      req.params.subcategoryId,
      { ...req.body },
      { new: true }
    );
    if (!updatedSubcategory) {
      return res.status(404).json({ message: "Subcategory not found" });
    }
    return res.json({ data: updatedSubcategory });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

exports.deleteSubcategory = async (req, res) => {
  try {
    const deletedSubcategory = await Subcategory.findByIdAndDelete(
      req.params.subcategoryId
    );
    if (!deletedSubcategory) {
      return res.status(404).json({ message: "Subcategory not found" });
    }
    return res.json({ message: "Subcategory deleted successfully" });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};
