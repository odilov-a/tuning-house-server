const Catalog = require("../models/Catalog.js");
const pagination = require("../utils/pagination.js");
const filterByLang = require("../utils/filterByLang.js");

exports.getAllCatalog = async (req, res) => {
  try {
    const catalogs = await pagination(Catalog, req.query);
    const result = filterByLang(catalogs.data, req.query.lang, "title");
    catalogs.data = result;
    return res.json(catalogs);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

exports.getCatalogById = async (req, res) => {
  try {
    const catalog = await Catalog.findById(req.params.catalogId);
    if (!catalog) {
      return res.status(404).json({ message: "Catalog not found" });
    }
    return res.json({ data: catalog });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

exports.createCatalog = async (req, res) => {
  try {
    const newCatalog = await Catalog.create({ ...req.body });
    return res.json({ data: newCatalog });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

exports.updateCatalog = async (req, res) => {
  try {
    const updatedCatalog = await Catalog.findByIdAndUpdate(
      req.params.catalogId,
      { ...req.body },
      { new: true }
    );
    if (!updatedCatalog) {
      return res.status(404).json({ message: "Catalog not found" });
    }
    return res.json({ data: updatedCatalog });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

exports.deleteCatalog = async (req, res) => {
  try {
    const deletedCatalog = await Catalog.findByIdAndDelete(
      req.params.catalogId
    );
    if (!deletedCatalog) {
      return res.status(404).json({ message: "Catalog not found" });
    }
    return res.json({ message: "Catalog deleted successfully" });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};
