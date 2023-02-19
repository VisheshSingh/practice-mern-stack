import { useState } from 'react';
import useWorkoutContext from '../hooks/useWorkoutContext';

const WorkoutForm = () => {
  const { dispatch } = useWorkoutContext();
  const [title, setTitle] = useState('');
  const [reps, setReps] = useState('');
  const [load, setLoad] = useState('');
  const [error, setError] = useState(null);
  const [emptyFields, setEmptyFields] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const workout = { title, reps, load };

    const res = await fetch('/api/workouts', {
      method: 'POST',
      body: JSON.stringify(workout),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const json = await res.json();

    if (!res.ok) {
      setError(json.error);
      setEmptyFields(json.emptyFields);
    }

    if (res.ok) {
      setError(null);
      setTitle('');
      setLoad('');
      setReps('');
      setEmptyFields([]);
      console.log('Workout added', json);
      dispatch({ type: 'CREATE_WORKOUT', payload: json });
    }
  };
  return (
    <form onSubmit={handleSubmit} className='create'>
      <h3>Add a new workout</h3>

      <label>Exercise title:</label>
      <input
        type='text'
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className={emptyFields.includes('title') ? 'error' : ''}
      />

      <label>Reps:</label>
      <input
        type='number'
        value={reps}
        onChange={(e) => setReps(e.target.value)}
        className={emptyFields.includes('reps') ? 'error' : ''}
      />

      <label>Load:</label>
      <input
        type='number'
        value={load}
        onChange={(e) => setLoad(e.target.value)}
        className={emptyFields.includes('load') ? 'error' : ''}
      />

      <button>Add</button>
      {error && <div className='error'>{error}</div>}
    </form>
  );
};

export default WorkoutForm;
