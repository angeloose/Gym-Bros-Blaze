const moment = require("moment");
const Workout = require("./models/Workout");
const User = require("./models/User");

/**
 * Calculate consistency score multiplier.
 * If the last workout is within 2 days, apply a multiplier.
 */
async function calculateConsistencyScore(userId) {
  // Get the last workout log for this user.
  const lastWorkout = await Workout.findOne({ user: userId }).sort({ date: -1 });
  if (!lastWorkout) {
    // No previous workouts? Use base multiplier.
    return 1;
  }
  const now = moment();
  const lastDate = moment(lastWorkout.date);
  const diffDays = now.diff(lastDate, "days");
  
  // If the last workout was within 2 days, return a multiplier, e.g., 1.2.
  // Otherwise, return 1.
  return diffDays <= 2 ? 1.2 : 1;
}

/**
 * Calculate PR bonus if the workout weight is greater than user's best PR.
 * Returns bonus points (e.g., 10 points extra).
 */
async function calculatePRBonus(userId, exercise, newWeight) {
  const user = await User.findById(userId);
  
  // In a real scenario you might track best PRs per exercise.
  // For simplicity, assume user.bestPR is for the given exercise.
  if (!user.bestPR || newWeight > user.bestPR) {
    // Update the best PR for the user.
    user.bestPR = newWeight;
    await user.save();
    return 10; // Bonus points for setting a new PR.
  }
  return 0;
}

/**
 * Combine scores and save the workout.
 */
async function logWorkout(userId, duration, exercise) {
  const consistencyMultiplier = await calculateConsistencyScore(userId);
  // Base consistency score: for example, duration in minutes multiplied by the multiplier.
  const consistencyScore = duration * consistencyMultiplier;

  const prBonus = await calculatePRBonus(userId, exercise, weight);

  const totalScore = consistencyScore + prBonus;

  const workout = new Workout({
    user: userId,
    duration,
    exercise,
    date: new Date(),
    consistencyScore,
    prBonus,
    totalScore,
  });

  await workout.save();

  // Optionally update the user's total score (or leaderboard)
  await User.findByIdAndUpdate(userId, { $inc: { totalScore: totalScore } });

  return workout;
}

module.exports = { calculateConsistencyScore, calculatePRBonus, logWorkout };