const express = require("express");
const fs = require("fs");
const sRoute = express.Router();
const staffPath = "../models/staff.json";
const traineesPath = "../models/trainees.json";
const trainersPath = "../models/trainers.json";
const path = { staffPath, traineesPath, trainersPath };

//staff

//read from data
const saveData = (path, data) => {
  const stringifyData = JSON.stringify(data);
  fs.writeFileSync(path, stringifyData);
};

//saveData(traineesPath,data)

const getData = () => {
  const jsonData = fs.readFileSync(path);
  return JSON.parse(jsonData);
};
//
sRoute.get("/staff", (req, res) => {
  fs.readFileSync(staffPath, "utf8", (err, data) => {
    if (err) {
      throw err;
    }
    res.send(JSON.parse(data));
  });
});

sRoute.post("/staff/addstaff", (req, res) => {
  var existingStaff = getData();

  console.log(existingStaff);

  saveData(staffPath, existingStaff);
  res.send({ success: true, message: "Staff created successfully" });

  res.status(401).json({
    Error: error.message,
  });
});

module.exports = sRoute;
