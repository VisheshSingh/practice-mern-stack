const express = require('express');
require('dotenv').config();

const app = express();

// middleware
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Listening to PORT: ${PORT}`);
});
