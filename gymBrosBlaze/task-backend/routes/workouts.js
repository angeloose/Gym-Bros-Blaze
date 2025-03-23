// routes/workouts.js
const express = require("express");
const router = express.Router();
const { logWorkout } = require("../services/scoreCalculator");
const authMiddleware = require("../middleware/authMiddleware"); // the function above

// POST endpoint for logging a workout.
router.post("/", async (req, res) => {
  const {duration, exercise} = req.body;
  const userId = req.userId;
  try {
    const workout = await logWorkout(userId, duration, exercise,);
    res.json({ success: true, workout });
  } catch (error) {
    console.error("Error logging workout:", error);
    res.status(500).json({ success: false, error: error.message });
  }
});

module.exports = router;
