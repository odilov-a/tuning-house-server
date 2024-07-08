const Cars = require("../models/Cars.js");
const pagination = require("../utils/pagination.js");

exports.getAllCars = async (req, res) => {
  try {
    const cars = await pagination(
      Cars,
      req.query,
      "categories",
      "subcategories"
    );
    return res.json(cars);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

exports.getCarsById = async (req, res) => {
  try {
    const car = await Cars.findById(req.params.carId);
    if (!car) {
      return res.status(404).json({ message: "Car not found" });
    }
    return res.json({ data: car });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

exports.createCar = async (req, res) => {
  try {
    const newCar = await Cars.create({ ...req.body });
    return res.json({ data: newCar });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

exports.updateCar = async (req, res) => {
  try {
    const updatedCar = await Cars.findByIdAndUpdate(
      req.params.carId,
      { ...req.body },
      { new: true }
    );
    if (!updatedCar) {
      return res.status(404).json({ message: "Car not found" });
    }
    return res.json({ data: updatedCar });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

exports.deleteCar = async (req, res) => {
  try {
    const deletedCar = await Cars.findByIdAndDelete(req.params.carId);
    if (!deletedCar) {
      return res.status(404).json({ message: "Car not found" });
    }
    return res.json({ message: "Car deleted successfully" });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};
