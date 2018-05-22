const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.status(200).json({
    message: 'Handling GET requests to /departments'
  });
});

router.post('/', (req, res) => {
  res.status(201).json({
    message: 'Handling POST requests to /departments'
  });
});

module.exports = router;
