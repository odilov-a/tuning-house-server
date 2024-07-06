const mongoose = require("mongoose");
const subcategorySchema = new mongoose.Schema(
  {
    title: {
      type: String,
    },
  },
  { timestamps: true }
);

const Subcategory = mongoose.model("subcategories", subcategorySchema);
module.exports = Subcategory;
