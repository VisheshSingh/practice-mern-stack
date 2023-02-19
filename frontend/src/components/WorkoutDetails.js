import React from 'react';
import useAuthContext from '../hooks/useAuthContext';
import useWorkoutContext from '../hooks/useWorkoutContext';

const WorkoutDetails = ({ workout }) => {
  const { user } = useAuthContext();
  const { dispatch } = useWorkoutContext();
  const handleDelete = async (id) => {
    const res = await fetch(`/api/workouts/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${user.token}`,
      },
    });
    const json = await res.json();
    console.log(json);
    if (res.ok) {
      dispatch({ type: 'DELETE_WORKOUT', payload: id });
    }
  };
  const selectCurrentWorkout = (id) => {
    dispatch({ type: 'SELECT_WORKOUT', payload: id });
  };
  return (
    <div className='workout-details'>
      <h4>{workout.title}</h4>
      <p>
        <strong>Reps:</strong> {workout.reps}
      </p>
      <p>
        <strong>Load:</strong> {workout.load} Kgs
      </p>
      <p>{new Date(workout.createdAt).toLocaleString()}</p>

      <div className='action-btns'>
        <span
          className='material-symbols-outlined'
          onClick={() => selectCurrentWorkout(workout._id)}
        >
          edit
        </span>
        <span
          className='material-symbols-outlined'
          onClick={() => handleDelete(workout._id)}
        >
          delete
        </span>
      </div>
    </div>
  );
};

export default WorkoutDetails;
