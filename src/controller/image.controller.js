const Images = require("../models/Image.js");

exports.getAll = async (req, res) => {
  try {
    const images = await Images.find();
    return res.json({
      data: images,
    });
  } catch (err) {
    return res.status(400).json({
      message: "Internal server error!",
      error: err.message,
    });
  }
};

exports.uploadImage = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({
        message: "At least one image is required!",
      });
    }

    const newImage = new Images({
      images: req.file.filename,
    });

    const savedImage = await newImage.save();
    return res.status(201).json({
      message: "File uploaded",
      status: 200,
      data: {
        fileName: req.file.filename,
        fileId: savedImage._id.toString(),
        fileUrl: `http://localhost:3001/uploads/${req.file.filename}`,
      },
    });
  } catch (err) {
    return res.status(500).json({
      message: "Internal server error!",
      error: err.message,
    });
  }
};

exports.editImage = async (req, res) => {
  try {
    const { images } = req.body;
    if (!images || images.length === 0) {
      return res.status(400).json({
        message: "At least one image is required!",
      });
    }
    const findImage = await Images.findById(req.params.id);
    if (!findImage) {
      return res.status(404).json({
        message: "Image Not Found!",
      });
    }
    findImage.images = images;
    const updatedImage = await findImage.save();
    return res.json({
      message: "Image updated",
      data: updatedImage,
    });
  } catch (err) {
    return res.status(500).json({
      message: "Internal server error!",
      error: err.message,
    });
  }
};

exports.deleteImage = async (req, res) => {
  try {
    const findImage = await Images.findById(req.params.id);
    if (!findImage) {
      return res.status(404).json({
        message: "Image Not Found!",
      });
    }
    await findImage.remove();
    return res.json({
      message: "Image deleted",
    });
  } catch (err) {
    return res.status(500).json({
      message: "Internal server error!",
      error: err.message,
    });
  }
};
