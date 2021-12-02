import Task from './Task';

export default {
  title: 'Task',
  component: Task,
};

const TaskTemplate = (args) => <Task {...args} />;

export const Default = TaskTemplate.bind({});
Default.args = {
  task: {
    id: '1',
    title: 'Task 1',
    state: 'TASK_INBOX',
    updatedAt: new Date(2018, 0, 1, 9, 0),
  },
};

export const Pinned = TaskTemplate.bind({});
Pinned.args = {
  task: {
    ...Default.args.task,
    state: 'TASK_PINNED',
  },
};

export const Archived = TaskTemplate.bind({});
Archived.args = {
  task: {
    ...Default.args.task,
    state: 'TASK_ARCHIVED',
  },
};
