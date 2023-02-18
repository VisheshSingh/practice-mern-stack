import { useState } from 'react';

const WorkoutForm = () => {
  const [title, setTitle] = useState('');
  const [reps, setReps] = useState('');
  const [load, setLoad] = useState('');
  const [error, setError] = useState(null);

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
    }

    if (res.ok) {
      setError(null);
      setTitle('');
      setLoad('');
      setReps('');
      console.log('Workout added', json);
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
      />

      <label>Reps:</label>
      <input
        type='number'
        value={reps}
        onChange={(e) => setReps(e.target.value)}
      />

      <label>Load:</label>
      <input
        type='number'
        value={load}
        onChange={(e) => setLoad(e.target.value)}
      />

      <button>Add</button>
      {error && <div className='error'>{error}</div>}
    </form>
  );
};

export default WorkoutForm;
