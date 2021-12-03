export const tasksReducers = {
  updateTaskState: (state, action) => {
    const { id, state: taskState } = action.payload;
    const taskIndex = state.findIndex((task) => task.id === id);
    if (taskIndex >= 0) state[taskIndex].state = taskState;
  },
};
