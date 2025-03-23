const User = require('../models/User');

exports.signup = async (req, res) => {
    const { username, password } = req.body;
  
    console.log("📨 New signup request:", { username, password });
  
    try {

      const newUser = new User({ username, password });
  
      console.log("💾 Saving new user...");
      await newUser.save();
      console.log("✅ User saved!");
  
      res.status(201).json({ message: 'User registered successfully' });
    } catch (err) {
      console.error('❌ Signup error:', err);
      res.status(500).json({ message: 'Server error' });
    }
  };
  