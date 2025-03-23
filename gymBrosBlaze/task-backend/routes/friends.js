const express = require('express');
const router = express.Router();
const Friend = require('../models/Friend');

// Get all friends
router.get('/', async (req, res) => {
  try {
    const friends = await Friend.find();
    res.json(friends);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Add a new friend
router.post('/', async (req, res) => {
  const friend = new Friend({ username: req.body.username });

  try {
    const newFriend = await friend.save();
    res.status(201).json(newFriend);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete a friend by ID
router.delete('/:id', async (req, res) => {
  try {
    await Friend.findByIdAndDelete(req.params.id);
    res.json({ message: 'Friend removed' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
