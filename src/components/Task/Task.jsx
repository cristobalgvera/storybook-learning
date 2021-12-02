const Task = ({ task: { title }, onArchiveTask, onPinTask }) => {
  return (
    <div data-testid="wrapper" className="list-item">
      <input data-testid="task-input" type="text" value={title} readOnly />
    </div>
  );
};

export default Task;
