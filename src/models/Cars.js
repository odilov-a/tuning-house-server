const mongoose = require("mongoose");
const carSchema = new mongoose.Schema(
  {
    categories: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "categories",
    },
    subcategories: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "subcategories",
    },
    carNumber: {
      type: String,
    },
    images: {
      type: String,
    },
  },
  { timestamps: true }
);

const Cars = mongoose.model("cars", carSchema);
module.exports = Cars;
