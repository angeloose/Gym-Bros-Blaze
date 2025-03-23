const mongoose = require('mongoose');

const FriendSchema = new mongoose.Schema({
  username: { type: String, required: true },
}, { timestamps: true });

module.exports = mongoose.model('Friend', FriendSchema);
