import { useSelector, useDispatch } from 'react-redux';
import {
  tasksSelector,
  updateTaskState,
} from '../../../lib/store/features/tasks/tasksSlice';

export const useTasks = () => {
  const tasks = useSelector(tasksSelector);
  const dispatch = useDispatch();

  const pinTask = (taskId) => {
    dispatch(updateTaskState({ id: taskId, task: 'TASK_PINNED' }));
  };

  const archiveTask = (taskId) => {
    dispatch(updateTaskState({ id: taskId, state: 'TASK_ARCHIVED' }));
  };

  const filteredTasks = tasks.filter((task) => task.state !== 'TASK_ARCHIVED');

  return { tasks: filteredTasks, pinTask, archiveTask };
};
