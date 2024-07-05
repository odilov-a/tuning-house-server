const mongoose = require("mongoose");
const ImageSchema = new mongoose.Schema({
  images: {
    type: String,
  },
});

const Images = mongoose.model("images", ImageSchema);
module.exports = Images;