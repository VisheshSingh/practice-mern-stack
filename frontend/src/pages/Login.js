import React, { useState } from 'react';
import useLogin from '../hooks/useLogin';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { isloading, error, login } = useLogin();
  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(email, password);
  };

  return (
    <form className='login' onSubmit={handleSubmit}>
      <h3>Login</h3>

      <label>Email</label>
      <input
        type='text'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <label>Password</label>
      <input
        type='password'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button disabled={isloading}>Log in</button>
      {error && <div className='error'>{error}</div>}
    </form>
  );
};

export default Login;
