const express = require("express");
const Employee = require("../models/Employee");
const router = express.Router();

router.get("/", (req, res) => {
  Employee.find({}, (err, foundEmployees) => {
    if (!err) {
      res.status(200).json(foundEmployees);
    } else {
      res.status(400).json(err);
    }
  });
});

router.post("/", (req, res) => {
  const { body } = req;
  Employee.create(body, (err, createdEmployee) => {
    if (!err) {
      res.status(200).json({ message: "all good ", createdEmployee });
    } else {
      res.status(400).json(err);
    }
  });
});

router.get("/:id", (req, res) => {
  Employee.findById(req.params.id, (err, foundEmployee) => {
    if (!err) {
      res.status(200).json(foundEmployee);
    } else {
      res.status(400).json(err);
    }
  });
});

module.exports = router;
