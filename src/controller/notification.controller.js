const Notification = require("../models/Notification.js");
const pagination = require("../utils/pagination.js");
const filterByLang = require("../utils/filterByLang.js");

exports.getAllNotifications = async (req, res) => {
  try {
    const notifications = await pagination(Notification, req.query);
    const result = filterByLang(
      notifications.data,
      req.query.lang,
      "title",
      "description"
    );
    notifications.data = result;
    return res.json(notifications);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

exports.getNotificationById = async (req, res) => {
  try {
    const notification = await Notification.findById(req.params.notificationId);
    if (!notification) {
      return res.status(404).json({ message: "Notification not found" });
    }
    return res.json({ data: notification });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

exports.createNotification = async (req, res) => {
  try {
    const newNotification = await Notification.create({ ...req.body });
    return res.json({ data: newNotification });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

exports.updateNotification = async (req, res) => {
  try {
    const updatedNotification = await Notification.findByIdAndUpdate(
      req.params.notificationId,
      { ...req.body },
      { new: true }
    );
    if (!updatedNotification) {
      return res.status(404).json({ message: "Notification not found" });
    }
    return res.json({ data: updatedNotification });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

exports.deleteNotification = async (req, res) => {
  try {
    const deletedNotification = await Notification.findByIdAndDelete(
      req.params.notificationId
    );
    if (!deletedNotification) {
      return res.status(404).json({ message: "Notification not found" });
    }
    return res.json({ message: "Notification deleted successfully" });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};
