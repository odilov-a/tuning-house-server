const mongoose = require("mongoose");
const notificationSchema = new mongoose.Schema(
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

const Notification = mongoose.model("notifications", notificationSchema);
module.exports = Notification;