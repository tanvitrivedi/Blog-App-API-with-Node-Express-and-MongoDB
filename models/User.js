const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String,
  registrationDate: { type: Date, default: Date.now },
});

module.exports = mongoose.model('User', userSchema);
