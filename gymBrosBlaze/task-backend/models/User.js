const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: String,
  password: String, // (You'll hash this later for security)
});

module.exports = mongoose.model('User', userSchema);
