const mongoose = require("mongoose");
const blogSchema = new mongoose.Schema(
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
    images: [
      {
        type: mongoose.Types.ObjectId,
        ref: "image",
      },
    ],
    views: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

const Blogs = mongoose.model("blogs", blogSchema);
module.exports = Blogs;