import { createContext, useReducer } from 'react';

const workoutReducer = (state, action) => {
  switch (action.type) {
    case 'SET_WORKOUTS':
      return {
        ...state,
        workouts: action.payload,
      };
    case 'CREATE_WORKOUT':
      return {
        ...state,
        workouts: [action.payload, ...state.workouts],
      };
    case 'DELETE_WORKOUT':
      return {
        ...state,
        workouts: state.workouts.filter(
          (workout) => workout._id !== action.payload
        ),
      };
    case 'PATCH_WORKOUT':
      return {
        ...state,
        workouts: [
          action.payload,
          ...state.workouts.filter(
            (workout) => workout._id !== action.payload._id
          ),
        ],
      };
    case 'SELECT_WORKOUT':
      return {
        ...state,
        selectedWorkout: state.workouts.find((w) => w._id === action.payload),
      };
    case 'RESET_CURRENT':
      return {
        ...state,
        selectedWorkout: null,
      };
    default:
      return state;
  }
};

const WorkoutContext = createContext();

export const WorkoutContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(workoutReducer, {
    workouts: null,
    selectedWorkout: null,
  });

  return (
    <WorkoutContext.Provider value={{ ...state, dispatch }}>
      {children}
    </WorkoutContext.Provider>
  );
};

export default WorkoutContext;
