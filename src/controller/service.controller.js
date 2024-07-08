const Service = require("../models/Service.js");
const pagination = require("../utils/pagination.js");
const filterByLang = require("../utils/filterByLang.js");

exports.getAllService = async (req, res) => {
  try {
    const services = await pagination(Service, req.query);
    const result = filterByLang(
      services.data,
      req.query.lang,
      "title",
      "description",
      "subTitle"
    );
    services.data = result;
    return res.json(services);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

exports.getServiceById = async (req, res) => {
  try {
    const service = await Service.findById(req.params.serviceId);
    if (!service) {
      return res.status(404).json({ message: "Service not found" });
    }
    return res.json({ data: service });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

exports.createService = async (req, res) => {
  try {
    const newService = await Service.create({ ...req.body });
    return res.json({ data: newService });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

exports.updateService = async (req, res) => {
  try {
    const updatedService = await Service.findByIdAndUpdate(
      req.params.serviceId,
      { ...req.body },
      { new: true }
    );
    if (!updatedService) {
      return res.status(404).json({ message: "Service not found" });
    }
    return res.json({ data: updatedService });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

exports.deleteService = async (req, res) => {
  try {
    const deletedService = await Service.findByIdAndDelete(
      req.params.serviceId
    );
    if (!deletedService) {
      return res.status(404).json({ message: "Service not found" });
    }
    return res.json({ message: "Service deleted successfully" });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};
