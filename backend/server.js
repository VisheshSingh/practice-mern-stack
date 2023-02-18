const express = require('express');
const connectDB = require('./connectDB');
const workoutRoutes = require('./routes/workoutRoutes');
require('dotenv').config();

const app = express();

// middleware
app.use(express.json()); // bodyparser middleware
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

app.use('/api/workouts', workoutRoutes);

connectDB();

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Connection to DB established to PORT: ${PORT}`);
});
