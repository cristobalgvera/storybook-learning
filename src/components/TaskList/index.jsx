import { useTasks } from './hooks/useTasks';
import PureTaskList from './PureTaskList';

export default function TaskList() {
  const { tasks, archiveTask, pinTask } = useTasks();

  return (
    <PureTaskList
      tasks={tasks}
      onPinTask={pinTask}
      onArchiveTask={archiveTask}
    />
  );
}
