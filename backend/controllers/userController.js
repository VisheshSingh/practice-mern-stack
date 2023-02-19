const loginUser = async (req, res) => {
  res.json({ msg: 'LOGIN' });
};
const signupUser = async (req, res) => {
  res.json({ msg: 'SIGNUP' });
};

module.exports = { loginUser, signupUser };
