import { useContext, useState } from 'react';
import AuthContext from '../context/authContext';

const useSignup = () => {
  const [error, setError] = useState(null);
  const [isloading, setIsLoading] = useState(null);
  const { dispatch } = useContext(AuthContext);

  const signup = async (name, email, password) => {
    setIsLoading(true);
    setError(null);
    const res = await fetch('/api/user/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, password }),
    });
    const json = await res.json();

    if (!res.ok) {
      setError(json.error);
      setIsLoading(false);
    }

    if (res.ok) {
      setIsLoading(false);
      dispatch({ type: 'LOGIN', payload: json });
      localStorage.setItem('user', JSON.stringify(json));
    }
  };
  return { error, isloading, signup };
};

export default useSignup;
