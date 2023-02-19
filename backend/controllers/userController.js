const User = require('../models/userModel');

const loginUser = async (req, res) => {
  res.json({ msg: 'LOGIN' });
};
const signupUser = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const user = await User.signup(name, email, password);
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { loginUser, signupUser };
