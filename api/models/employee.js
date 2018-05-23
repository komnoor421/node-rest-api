const mongoose = require('mongoose');

const employeeSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: { type: String, required: true },
  gender: String,
  phone: Number,
  email: { type: String, required: true },
  hireDate: { type: Date, required: true },
  departmentId: Number,
  jobTitle: String
});

module.exports = mongoose.model('Employee', employeeSchema);
