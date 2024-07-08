const mongoose = require("mongoose");
const filialSchema = new mongoose.Schema(
  {
    titleUz: {
      type: String,
    },
    titleRu: {
      type: String,
    },
    time: {
      type: String,
    },
    coordinate: {
      type: String,
    },
    number: {
      type: String,
    },
    services: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "services",
      },
    ],
  },
  { timestamps: true }
);

const Filial = mongoose.model("filials", filialSchema);
module.exports = Filial;
