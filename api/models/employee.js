const mongoose = require('mongoose');

const employeeSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: String,
  gender: String,
  birthDate: Date,
  phone: Number,
  hireDate: Date
});
