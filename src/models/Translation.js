const mongoose = require("mongoose");
const TranslationSchema = new mongoose.Schema({
  message: {
    type: String,
  },
  uz: {
    type: String,
  },
  ru: {
    type: String,
  },
});

const Translations = mongoose.model("translations", TranslationSchema);
module.exports = Translations;
