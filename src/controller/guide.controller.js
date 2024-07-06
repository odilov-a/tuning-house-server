const Guide = require("../models/Guide.js");
const pagination = require("../utils/pagination.js");
const filterByLang = require("../utils/filterByLang.js");

exports.getAllGuide = async (req, res) => {
  try {
    const guidelines = await pagination(Guide, req.query);
    const result = filterByLang(
      guidelines.data,
      req.query.lang,
      "title",
      "description"
    );
    guidelines.data = result;
    return res.json(guidelines);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

exports.getGuideById = async (req, res) => {
  try {
    const guide = await Guide.findById(req.params.guideId);
    if (!guide) {
      return res.status(404).json({ message: "Guide not found" });
    }
    return res.json({ data: guide });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

exports.createGuide = async (req, res) => {
  try {
    const newGuide = await Guide.create({ ...req.body });
    return res.json({ data: newGuide });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

exports.updateGuide = async (req, res) => {
  try {
    const updatedGuide = await Guide.findByIdAndUpdate(
      req.params.guideId,
      { ...req.body },
      { new: true }
    );
    if (!updatedGuide) {
      return res.status(404).json({ message: "Guide not found" });
    }
    return res.json({ data: updatedGuide });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

exports.deleteGuide = async (req, res) => {
  try {
    const deletedGuide = await Guide.findByIdAndDelete(req.params.guideId);
    if (!deletedGuide) {
      return res.status(404).json({ message: "Guide not found" });
    }
    return res.json({ message: "Guide deleted successfully" });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};
