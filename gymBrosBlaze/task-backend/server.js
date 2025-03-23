require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const leaderboardRoutes = require("./routes/leaderboard");
const authRouter = require('./routes/auth');

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('✅ Connected to MongoDB via Mongoose');
}).catch((err) => {
  console.error('❌ Mongoose connection error:', err);
});

// Routes
const authRoutes = require('./routes/auth');
app.use('/api', authRoutes);

app.use("/leaderboard", leaderboardRoutes);

app.use("/auth", authRouter);

// Default route
app.get('/', (req, res) => {
  res.send('GymBros API is running!');
});

// Start server
app.listen(port, () =>  {
  console.log(`🚀 Server is running at http://localhost:${port}`);
});
