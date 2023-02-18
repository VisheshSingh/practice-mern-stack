const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MONGO DB connected to host at: ', conn.connection.host);
  } catch (error) {
    console.log('ERROR - Connection to DB failed', error);
    process.exit(1);
  }
};

module.exports = connectDB;
