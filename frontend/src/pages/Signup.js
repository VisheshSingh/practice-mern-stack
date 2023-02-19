import React, { useState } from 'react';
import useSignup from '../hooks/useSignup';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { error, isloading, signup } = useSignup();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup(name, email, password);
  };

  return (
    <form className='signup' onSubmit={handleSubmit}>
      <h3>Signup</h3>

      <label>Name</label>
      <input
        type='text'
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

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

      <button disabled={isloading}>Sign up</button>
      {error && <div className='error'>{error}</div>}
    </form>
  );
};

export default Signup;
