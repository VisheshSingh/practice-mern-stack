import React from 'react';

const WorkoutDetails = ({ workout }) => {
  return (
    <div className='workout-details'>
      <h4>{workout.title}</h4>
      <p>Reps: {workout.reps}</p>
      <p>Load: {workout.load} Kgs</p>
      <p>{new Date(workout.createdAt).toLocaleString()}</p>
    </div>
  );
};

export default WorkoutDetails;
