const mongoose = require('mongoose');

const departmentSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  departmentId: Number,
  name: String
});

module.exports = mongoose.model('Department', departmentSchema);

// deptId: req.body.deptId,
// name: req.body.name
