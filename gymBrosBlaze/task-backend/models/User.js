const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: String,
  password: String, // (You'll hash this later for security)
  consistencyScore: {type: Number, default: 0},
  prScore: {type: Number, default: 0},
  totalScore: {type: Number, default: 0},
});

module.exports = mongoose.model('User', userSchema);
