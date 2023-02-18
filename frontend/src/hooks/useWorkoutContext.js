import { useContext } from 'react';
import workoutContext from '../context/workoutContext';

const useWorkoutContext = () => {
  const context = useContext(workoutContext);
  if (!context) {
    throw new Error(
      'useWorkoutContext can only be used within WorkoutContextProvider'
    );
  }
  return context;
};

export default useWorkoutContext;
