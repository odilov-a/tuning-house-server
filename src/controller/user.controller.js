const Users = require("../models/User.js");
const { sign } = require("../utils/jwt.js");
const bcrypt = require("bcrypt");

exports.getMe = async (req, res) => {
  try {
    const { userId } = req.headers;
    const findUser = await Users.findById(userId);
    if (!findUser) {
      return res.status(404).json({
        message: "User Not Found!",
      });
    }
    return res.json({
      data: {
        token: sign(findUser._id),
        username: findUser.username,
      },
    });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

exports.register = async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const newUser = new Users({
      username: req.body.username,
      password: hashedPassword,
      phone_number: req.body.phone_number,
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      googleId: req.body.googleId,
      appleId: req.body.appleId,
      facebookId: req.body.facebookId,
      telegramId: req.body.telegramId,
      role: req.body.role || "user",
      adminPermissions: req.body.adminPermissions || [],
      gender: req.body.gender,
      birth_date: req.body.birth_date,
      images: req.body.images,
    });
    const user = await newUser.save();
    return res.json({
      message: "User created",
      data: user,
    });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

exports.login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const findUser = await Users.findOne({ username });
    if (!findUser) {
      return res.status(404).json({
        message: "User Not Found!",
      });
    }
    const isPasswordValid = await bcrypt.compare(password, findUser.password);
    if (!isPasswordValid) {
      return res.status(401).json({
        message: "Invalid Password",
      });
    }
    return res.json({
      data: {
        token: sign(findUser._id.toString()),
        username: findUser.username,
        role: findUser.role,
      },
    });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

exports.updateUser = async (req, res) => {
  try {
    const { userId } = req.headers;
    const updates = { ...req.body };
    if (updates.password) {
      updates.password = await bcrypt.hash(updates.password, 10);
    }
    const updatedUser = await Users.findByIdAndUpdate(userId, updates, {
      new: true,
    });
    if (!updatedUser) {
      return res.status(404).json({
        message: "User not found!",
      });
    }
    return res.json({
      message: "User updated",
      data: updatedUser,
    });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};
