const mongoose = require("mongoose");
const catalogSchema = new mongoose.Schema(
  {
    titleUz: {
      type: String,
      required: true,
    },
    titleRu: {
      type: String,
      required: true,
    },
    images: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Catalog = mongoose.model("catalogs", catalogSchema);
module.exports = Catalog;
