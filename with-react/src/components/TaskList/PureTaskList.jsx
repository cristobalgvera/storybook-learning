import PropTypes from 'prop-types';
import {
  TASK_ARCHIVED,
  TASK_INBOX,
  TASK_PINNED,
} from '../../constants/taskStates';
import Task from '../Task';
import EmptyTaskList from './ui/EmptyTaskList';
import LoadingList from './ui/LoadingList';

export default function PureTaskList({
  loading,
  tasks,
  onPinTask,
  onArchiveTask,
}) {
  const events = { onPinTask, onArchiveTask };

  if (loading) return <LoadingList />;
  if (!tasks.length) return <EmptyTaskList />;

  const orderedTasks = [
    ...tasks.filter(({ state }) => state === TASK_PINNED),
    ...tasks.filter(({ state }) => state === TASK_INBOX),
    ...tasks.filter(({ state }) => state === TASK_ARCHIVED),
  ];

  return (
    <div className="list-items">
      {orderedTasks.map((task) => (
        <Task key={task.id} task={task} {...events} />
      ))}
    </div>
  );
}

PureTaskList.propTypes = {
  loading: PropTypes.bool,
  tasks: PropTypes.arrayOf(Task.propTypes.task).isRequired,
  onPinTask: PropTypes.func.isRequired,
  onArchiveTask: PropTypes.func.isRequired,
};

PureTaskList.defaultProps = {
  loading: false,
};
