const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const validator = require('validator');

const Schema = mongoose.Schema;

const UserSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

UserSchema.statics.signup = async function (name, email, password) {
  if (!email || !password || !name) {
    throw Error('All fields must be filled!');
  }
  if (!validator.isEmail(email)) {
    throw Error('Incorrect email');
  }
  if (!validator.isStrongPassword(password)) {
    throw Error('Password is not strong enough');
  }

  const userExists = await this.findOne({ email });

  if (userExists) {
    throw Error('Email already exists');
  }

  const salt = await bcrypt.genSalt(10);
  const hashPassword = await bcrypt.hash(password, salt);

  const user = this.create({ name, email, password: hashPassword });
  return user;
};

const User = mongoose.model('User', UserSchema);

module.exports = User;
