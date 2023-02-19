import React from 'react';
import useWorkoutContext from '../hooks/useWorkoutContext';

const WorkoutDetails = ({ workout }) => {
  const { dispatch } = useWorkoutContext();
  const handleDelete = async (id) => {
    const res = await fetch(`/api/workouts/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const json = await res.json();
    console.log(json);
    if (res.ok) {
      dispatch({ type: 'DELETE_WORKOUT', payload: id });
    }
  };
  return (
    <div className='workout-details'>
      <h4>{workout.title}</h4>
      <p>Reps: {workout.reps}</p>
      <p>Load: {workout.load} Kgs</p>
      <p>{new Date(workout.createdAt).toLocaleString()}</p>
      <span onClick={() => handleDelete(workout._id)}>delete</span>
    </div>
  );
};

export default WorkoutDetails;
