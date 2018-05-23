const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Employee = require('../models/employee');

//GET request for all employees
router.get('/', (req, res) => {
  Employee.find()
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

//POST request for a new employee
router.post('/', (req, res) => {
  const employee = new Employee({
    _id: new mongoose.Types.ObjectId(),
    name: req.body.name,
    gender: req.body.name,
    phone: req.body.phone,
    email: req.body.email,
    hireDate: req.body.hireDate,
    departmentId: req.body.departmentId,
    jobTitle: req.body.jobTitle
  });
  employee.save().then(result => {
    console.log(result);
    res.status(201).json({
      message: 'Handling POST requests to /employees',
      addedEmployee: employee
    });
  })
  .catch(err => {
    console.log(err);
    res.status(500).json({
      error: err
    });
  });
});

//GET request for a specific employee by id
router.get('/:employeeid', (req, res) => {
  const id = req.params.employeeid;
  Employee.findById(id)
    .exec()
      .then(doc => {
        console.log("From database", doc);
        if (doc) {
          res.status(200).json(doc);
        } else {
          res.status(404).json({ message: "No employee found with specified id" });
        }
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({ error: err });
      });
});

//UPDATE request for specific employee by id
router.patch('/:employeeid', (req, res) => {
  const id = req.params.employeeid;
  const updateOps = {};
  for (const ops of req.body) {
    updateOps[ops.propName] = ops.value;
  }
  Employee.update({ _id: id }, { $set: updateOps })
    .exec()
    .then(result => {
      console.log(result);
      res.status(200).json(result);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
});

//DELETE request for specific employee by id
router.delete('/:employeeid', (req, res) => {
  const id = req.params.employeeid;
  Employee.remove({ _id: id })
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
