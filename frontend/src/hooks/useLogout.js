import { useContext } from 'react';
import AuthContext from '../context/authContext';
import useWorkoutContext from './useWorkoutContext';

const useLogout = () => {
  const { dispatch } = useContext(AuthContext);
  const { dispatch: workoutDispatch } = useWorkoutContext();

  const logout = () => {
    localStorage.removeItem('user');
    dispatch({ type: 'LOGOUT' });
    workoutDispatch({ type: 'SET_WORKOUTS', payload: null });
  };
  return { logout };
};

export default useLogout;
