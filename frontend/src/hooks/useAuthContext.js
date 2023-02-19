import { useContext } from 'react';
import AuthContext from '../context/authContext';

const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error(
      'useAuthContext can only be used within WorkoutContextProvider'
    );
  }
  return context;
};

export default useAuthContext;
