const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app
  .get("/", (req, res) => {
    res.status(200).json({ message: "API sending data" });
  })
  .listen(3000, () => `server running on port 3000`);
