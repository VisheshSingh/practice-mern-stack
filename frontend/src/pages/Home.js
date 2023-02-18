import { useEffect } from 'react';
import useWorkoutContext from '../hooks/useWorkoutContext';

// components
import WorkoutDetails from '../components/WorkoutDetails';
import WorkoutForm from '../components/WorkoutForm';

const Home = () => {
  const { workouts, dispatch } = useWorkoutContext();

  useEffect(() => {
    const fetchWorkouts = async () => {
      const res = await fetch('/api/workouts');
      const json = await res.json();

      if (res.ok) {
        dispatch({ type: 'SET_WORKOUTS', payload: json });
      }
    };

    fetchWorkouts();
  }, []);

  return (
    <div className='home'>
      <div className='workouts'>
        {workouts &&
          workouts.map((workout) => <WorkoutDetails workout={workout} />)}
      </div>
      <WorkoutForm />
    </div>
  );
};

export default Home;
