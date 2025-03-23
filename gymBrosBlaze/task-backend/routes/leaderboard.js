const express = require("express");
const router = express.Router();
const User = require("../models/User");

// Get top 10 users by totalScore
router.get("/", async (req, res) => {
  try {
    const leaderboard = await User.find().sort({ totalScore: -1 }).limit(10);
    res.json(leaderboard);
  } catch (error) {
    console.error("Error fetching leaderboard:", error);
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
