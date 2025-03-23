// models/Workout.js
const mongoose = require("mongoose");

const workoutSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  duration: Number, // in minutes
  exercise: String,
  date: { type: Date, default: Date.now },
  consistencyScore: Number,
  prBonus: Number,
  totalScore: Number,
});

module.exports = mongoose.model("Workout", workoutSchema);
