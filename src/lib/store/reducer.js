import { combineReducers } from 'redux';
import tasksReducer from './features/tasks/tasksSlice';
import appReducer from './features/app/appSlice';

export default combineReducers({
  app: appReducer,
  tasks: tasksReducer,
});
