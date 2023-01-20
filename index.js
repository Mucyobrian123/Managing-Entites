const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const router = require("../routes/staff");

app.use("/", router);
app.listen(3040, () => {
  console.log("Listeninng to port:3040");
});
