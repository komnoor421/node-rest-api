const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Department = require('../models/department');

//GET request for all departments
router.get('/', (req, res) => {
  Department.find()
    .exec()
      .then(docs => {
        console.log(docs);
        res.status(200).json(docs);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({
          error: err
        });
      });
});


//POST request for a new department
router.post('/', (req, res) => {
  const department = new Department({
    _id: new mongoose.Types.ObjectId(),
    departmentId: req.body.departmentId,
    name: req.body.name
  });
  department.save().then(result => {
    console.log(result);
    res.status(201).json({
      message: 'Handling POST requests to /departments',
      addedDepartment: department
    });
  })
  .catch(err => {
    console.log(err);
    res.status(500).json({
      error: err
    });
  });
});

//GET request for a specific department by id
router.get('/:deptId', (req, res) => {
  const id = req.params.deptId;
  Department.findOne({departmentId : id})
    .exec()
      .then(doc => {
        console.log("From database", doc);
        if (doc) {
          res.status(200).json(doc);
        } else {
          res.status(404).json({ message: "No department found with specified id" });
        }
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({ error: err });
      });
});

//DELETE request for specific department by id
router.delete('/:deptId', (req, res) => {
  const id = req.params.deptId;
  Department.remove({ _id: id })
    .exec()
      .then(result => {
        res.status(200).json(result);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({
          error: err
        });
      });
});

module.exports = router;
