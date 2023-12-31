// server.js
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("./mongoose");
const authRoutes = require("./routes/auth");

const app = express();
const port = 5501;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Use authentication routes
app.use("/auth", authRoutes);

app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
