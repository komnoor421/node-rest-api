const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const employeeRoutes = require('./api/routes/employees');
const departmentRoutes = require('./api/routes/departments');

//Connect to Mongoose
mongoose.connect('mongodb://komron:komron@node-rest-api-shard-00-00-fyqxe.mongodb.net:27017,node-rest-api-shard-00-01-fyqxe.mongodb.net:27017,node-rest-api-shard-00-02-fyqxe.mongodb.net:27017/nodeRest?ssl=true&replicaSet=node-rest-api-shard-0&authSource=admin&retryWrites=false');

//Test MongoDB Connection
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.on('connected', function () {
  console.log('MongoDB Connection Successful!');
});

//body parser middleware
app.use(bodyParser.json());

//import endpoint routes
app.use('/employees', employeeRoutes);
app.use('/departments', departmentRoutes);

app.use((req, res, next) => {
  const error = new Error('Route not found');
  error.status = 404;
  next(error);
});

//custom error handling for unknown routes
app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message
    }
  });
});

//listen on port 3000
app.listen(3000, () => console.log('Listening on port 3000...'));
