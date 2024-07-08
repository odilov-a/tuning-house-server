const mongoose = require("mongoose");
const guideSchema = new mongoose.Schema(
  {
    titleUz: {
      type: String,
      required: true,
    },
    descriptionUz: {
      type: String,
      required: true,
    },
    titleRu: {
      type: String,
      required: true,
    },
    descriptionRu: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Guide = mongoose.model("guidelines", guideSchema);
module.exports = Guide;
