const mongoose = require("mongoose");
const productSchema = new mongoose.Schema(
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
    hashtags: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "hashtags",
    },
    catalogs: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "catalogs",
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
  },
  { timestamps: true }
);

const Product = mongoose.model("products", productSchema);
module.exports = Product;
