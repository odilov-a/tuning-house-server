const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      unique: true,
    },
    password: {
      type: String,
    },
    phone_number: {
      type: Number,
      unique: true,
    },
    cars: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "cars",
      },
    ],
    first_name: {
      type: String,
    },
    last_name: {
      type: String,
    },
    gender: {
      type: String,
    },
    birth_date: {
      type: Date,
    },
    image: {
      type: String,
    },
    googleId: {
      type: String,
      unique: true,
      sparse: true,
    },
    appleId: {
      type: String,
      unique: true,
      sparse: true,
    },
    facebookId: {
      type: String,
      unique: true,
      sparse: true,
    },
    telegramId: {
      type: String,
      unique: true,
      sparse: true,
    },
    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
    },
    adminPermissions: {
      type: [String],
      default: [],
    },
    verificationCode: {
      type: String,
    },
    verificationCodeExpires: {
      type: Date,
    },
  },
  {
    timestamps: true,
  }
);

const Users = mongoose.model("users", UserSchema);
module.exports = Users;
