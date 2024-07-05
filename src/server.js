const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const path = require("path");
dotenv.config();
require("./backup.js");
require("./connection.js");
const routes = require("./routes/router.js");
const PORT = process.env.PORT || 3001;

const app = express();
app.use(express.json());
app.use(cors());
app.use("/api", routes);
app.use("/uploads", express.static("uploads"));
app.get("/", (req, res) => {
  return res.json({ message: "Server is run!" });
});

function startServerOnPort(port) {
  const listen = app.listen(port, () =>
    console.log(`server is running ${port}`)
  );
  listen.on("error", () => {
    console.log(`Port ${port} is busy. Trying a different port...`);
    startServerOnPort(port + 1);
  });
}

startServerOnPort(PORT);