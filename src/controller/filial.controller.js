const Filial = require("../models/Filial.js");
const pagination = require("../utils/pagination.js");
const filterByLang = require("../utils/filterByLang.js");

exports.getAllFilial = async (req, res) => {
  try {
    const filials = await pagination(Filial, req.query);
    const result = filterByLang(filials.data, req.query.lang, "title");
    filials.data = result;
    return res.json(filials);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

exports.getFilialById = async (req, res) => {
  try {
    const filial = await Filial.findById(req.params.filialId);
    if (!filial) {
      return res.status(404).json({ message: "Filial not found" });
    }
    return res.json({ data: filial });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

exports.createFilial = async (req, res) => {
  try {
    const newFilial = await Filial.create({ ...req.body });
    return res.json({ data: newFilial });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

exports.updateFilial = async (req, res) => {
  try {
    const updatedFilial = await Filial.findByIdAndUpdate(
      req.params.filialId,
      { ...req.body },
      { new: true }
    );
    if (!updatedFilial) {
      return res.status(404).json({ message: "Filial not found" });
    }
    return res.json({ data: updatedFilial });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

exports.deleteFilial = async (req, res) => {
  try {
    const deletedFilial = await Filial.findByIdAndDelete(
      req.params.filialId
    );
    if (!deletedFilial) {
      return res.status(404).json({ message: "Filial not found" });
    }
    return res.json({ message: "Filial deleted successfully" });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};
