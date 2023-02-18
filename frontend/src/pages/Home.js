import { useState, useEffect } from 'react';
import WorkoutDetails from '../components/WorkoutDetails';

const Home = () => {
  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    const fetchWorkouts = async () => {
      const res = await fetch('/api/workouts');
      const json = await res.json();

      if (res.ok) {
        setWorkouts(json);
      }
    };

    fetchWorkouts();
  }, []);

  return (
    <div className='home'>
      <div className='workouts'>
        {workouts &&
          workouts.map((workout) => {
            return <WorkoutDetails key={workout.id} workout={workout} />;
          })}
      </div>
    </div>
  );
};

export default Home;
