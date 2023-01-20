const express = require("express");
const router = express.Router();
const fs = require("fs");
const sRoute = require("../controllers/staff");
router.use(sRoute);
module.exports = router;

// router.get("/", (req, res) => {
//   res.status(200).send("show all staff");
// });

// router.get("/:id", (req, res) => {
//   res.status(200).send(`show staff by id ${req.params.id}`);
// });

// router.post("/", (req, res) => {
//   res.status(200).send("create new staff");
// });

// router.put("/:id", (req, res) => {
//   res.status(200).send(`update staff ${req.params.id}`);
// });

// router.delete("/:id", (req, res) => {
//   res.status(200).send(`Delete staff ${req.params.id}`);
// });

module.exports = router;
