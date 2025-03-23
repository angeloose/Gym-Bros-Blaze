const express = require('express');
const router = express.Router();
const { signup } = require('../controllers/authController');
const User = require("../models/User");
const jwt = require("jsonwebtoken");

router.post('/signup', signup);

router.post("/login", async (req, res) => {
    const { username, password } = req.body;
    try {
      // Find the user by username (or email)
      const user = await User.findOne({ username });
      if (!user) {
        return res.status(401).json({ error: "Invalid credentials" });
      }
      
      // Validate the password (make sure to hash and compare in production)
      if (password !== user.password) {
        return res.status(401).json({ error: "Invalid credentials" });
      }
      
      // Generate JWT (use a secret key from your environment variables)
      const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: "1h" });
      res.json({ token, user });
    } catch (error) {
      console.error("Login error:", error);
      res.status(500).json({ error: "Server error" });
    }
  });

router.post("/bypassLogin", async (req, res) => {
    const { username } = req.body;
    try {
      const user = await User.findOne({ username });
      if (!user) {
        return res.status(404).json({ error: "User not found" });
      }
      // Generate JWT using JWT_SECRET (make sure it’s set in your .env)
      const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: "1h" });
      res.json({ token, user });
    } catch (error) {
      console.error("Bypass login error:", error);
      res.status(500).json({ error: "Server error" });
    }
});

module.exports = router;
