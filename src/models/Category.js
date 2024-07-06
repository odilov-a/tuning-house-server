const mongoose = require("mongoose");
const categorySchema = new mongoose.Schema(
  {
    title: {
      type: String,
    },
    images: {
      type: String,
    },
    subcategories: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "subcategories",
    },
  },
  { timestamps: true }
);

const Category = mongoose.model("categories", categorySchema);
module.exports = Category;
