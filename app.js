const express = require("express");
const mongoose = require("mongoose");
const bodyparser = require("body-parser");
const morgan = require("morgan");
const cors = require("cors");
const router = require("./routes/route");
const app = express();
app.use(cors());
mongoose.connect(
  "mongodb+srv://bereketdinku:beki1234@cluster0.69ripac.mongodb.net/songs"
);
const db = mongoose.connection;
db.on("error", (err) => {
  console.log(err);
});
db.once("open", () => {
  console.log("Database Connection Established");
});
app.use(morgan("dev"));
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());
app.listen(8000, () => {
  console.log("Server is running on port 8000");
});
app.use("/api", router);
