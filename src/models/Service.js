const mongoose = require("mongoose");
const serviceSchema = new mongoose.Schema(
  {
    titleUz: {
      type: String,
    },
    subTitleUz: {
      type: String,
    },
    descriptionUz: {
      type: String,
    },
    titleRu: {
      type: String,
    },
    subTitleRu: {
      type: String,
    },
    descriptionRu: {
      type: String,
    },
    price: {
      type: Number,
    },
    images: {
      type: String,
    },
    images1: {
      type: String,
    },
    images2: {
      type: String,
    },
    images3: {
      type: String,
    },
    images4: {
      type: String,
    },
    images5: {
      type: String,
    },
  },
  { timestamps: true }
);

const Service = mongoose.model("services", serviceSchema);
module.exports = Service;
