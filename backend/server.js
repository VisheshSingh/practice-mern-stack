const express = require('express');
const workoutRoutes = require('./routes/workoutRoutes');
require('dotenv').config();

const app = express();

// middleware
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

app.use('/api/workouts', workoutRoutes);

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Listening to PORT: ${PORT}`);
});
