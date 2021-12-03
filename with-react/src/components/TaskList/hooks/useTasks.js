import { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  TASK_ARCHIVED,
  TASK_INBOX,
  TASK_PINNED,
} from '../../../constants/taskStates';
import {
  tasksSelector,
  updateTaskState,
} from '../../../lib/store/features/tasks/tasksSlice';

export const useTasks = () => {
  const tasks = useSelector(tasksSelector);
  const dispatch = useDispatch();

  const filteredTasks = tasks.filter((task) => task.state !== TASK_ARCHIVED);

  const pinTask = useCallback(
    (taskId) => {
      const isPinned = checkIfGivenTaskIsPinned(taskId, filteredTasks);
      dispatch(
        updateTaskState({
          id: taskId,
          state: isPinned ? TASK_INBOX : TASK_PINNED,
        }),
      );
    },
    [dispatch, filteredTasks],
  );

  const archiveTask = useCallback(
    (taskId) => {
      dispatch(updateTaskState({ id: taskId, state: TASK_ARCHIVED }));
    },
    [dispatch],
  );

  return { tasks: filteredTasks, pinTask, archiveTask };
};

function checkIfGivenTaskIsPinned(taskId, tasks) {
  return tasks.find((task) => task.id === taskId && task.state === TASK_PINNED);
}
