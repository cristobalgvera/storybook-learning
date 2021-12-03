import { createSlice } from '@reduxjs/toolkit';
import { TASK_INBOX } from '../../../../constants/taskStates';
import { tasksReducers } from './tasksReducers';

const initialTasks = [
  { id: '1', title: 'Task 1', state: TASK_INBOX },
  { id: '2', title: 'Task 2', state: TASK_INBOX },
  { id: '3', title: 'Task 3', state: TASK_INBOX },
  { id: '4', title: 'Task 4', state: TASK_INBOX },
];

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: initialTasks,
  reducers: tasksReducers,
});

export const { updateTaskState } = tasksSlice.actions;
export const tasksSelector = (state) => state.tasks;
export default tasksSlice.reducer;
