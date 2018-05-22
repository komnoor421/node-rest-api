const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.status(200).json({
    message: 'Handling GET requests to /employees'
  });
});

router.post('/', (req, res) => {
  const employee = {
    name: req.body.name,
    phone: req.body.phone
  };
  res.status(201).json({
    message: 'Handling POST requests to /employees',
    addedEmployee: employee
  });
});

router.get('/:employeeid', (req, res) => {
  const id = req.params.employeeid;
});

router.patch('/:employeeid', (req, res) => {
  const id = req.params.employeeid;
});

router.delete('/:employeeid', (req, res) => {
  const id = req.params.employeeid;
});

module.exports = router;
