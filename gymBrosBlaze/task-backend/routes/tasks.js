// routes/tasks.js

const express = require('express');
const router = express.Router();
const Task = require('../models/Task');

// ✅ GET: Get all tasks
router.get('/', async (req, res) => {
  try {
    const tasks = await Task.find(); // fetch all tasks from MongoDB
    res.json(tasks); // return them to frontend
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ✅ POST: Create a new task
router.post('/', async (req, res) => {
  try {
    const { title, description } = req.body;
    const task = new Task({ title, description });
    await task.save(); // save to MongoDB
    res.json(task); // return the saved task
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// ✅ DELETE: Delete a task by ID
router.delete('/:id', async (req, res) => {
  try {
    await Task.findByIdAndDelete(req.params.id);
    res.json({ message: 'Task deleted' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
