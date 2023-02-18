const express = require('express');
const mongoose = require('mongoose');
const workoutRoutes = require('./routes/workoutRoutes');
require('dotenv').config();

const app = express();

// middleware
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

app.use('/api/workouts', workoutRoutes);

mongoose
  .connect(process.env.MONGO_URL)
  .then((conn) => {
    const PORT = process.env.PORT;
    app.listen(PORT, () => {
      console.log(`Connection to DB established to PORT: ${PORT}`);
    });
  })
  .catch((err) => {
    console.log('Error connecting to MONGO DB', err);
    process.exit(1);
  });
