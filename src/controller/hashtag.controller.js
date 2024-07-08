const Hashtag = require("../models/Hashtag.js");
const pagination = require("../utils/pagination.js");
const filterByLang = require("../utils/filterByLang.js");

exports.getAllHashtag = async (req, res) => {
  try {
    const hashtags = await pagination(Hashtag, req.query);
    const result = filterByLang(hashtags.data, req.query.lang, "title");
    hashtags.data = result;
    return res.json(hashtags);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

exports.getHashtagById = async (req, res) => {
  try {
    const hashtag = await Hashtag.findById(req.params.hashtagId);
    if (!hashtag) {
      return res.status(404).json({ message: "Hashtag not found" });
    }
    return res.json({ data: hashtag });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

exports.createHashtag = async (req, res) => {
  try {
    const newHashtag = await Hashtag.create({ ...req.body });
    return res.json({ data: newHashtag });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

exports.updateHashtag = async (req, res) => {
  try {
    const updatedHashtag = await Hashtag.findByIdAndUpdate(
      req.params.hashtagId,
      { ...req.body },
      { new: true }
    );
    if (!updatedHashtag) {
      return res.status(404).json({ message: "Hashtag not found" });
    }
    return res.json({ data: updatedHashtag });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

exports.deleteHashtag = async (req, res) => {
  try {
    const deletedHashtag = await Hashtag.findByIdAndDelete(
      req.params.hashtagId
    );
    if (!deletedHashtag) {
      return res.status(404).json({ message: "Hashtag not found" });
    }
    return res.json({ message: "Hashtag deleted successfully" });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};
