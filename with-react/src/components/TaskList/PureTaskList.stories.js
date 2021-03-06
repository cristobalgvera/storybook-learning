import PureTaskList from './PureTaskList';
import * as TaskStories from '../Task/Task.stories';
import { TASK_PINNED } from '../../constants/taskStates';

export default {
  title: 'PureTaskList',
  component: PureTaskList,
  decorators: [(story) => <div style={{ padding: '3rem' }}>{story()}</div>],
};

const Template = (args) => <PureTaskList {...args} />;

export const Default = Template.bind({});
Default.args = {
  tasks: [
    { ...TaskStories.Default.args.task, id: '1', title: 'Task 1' },
    { ...TaskStories.Default.args.task, id: '2', title: 'Task 2' },
    { ...TaskStories.Default.args.task, id: '3', title: 'Task 3' },
    { ...TaskStories.Default.args.task, id: '4', title: 'Task 4' },
    { ...TaskStories.Default.args.task, id: '5', title: 'Task 5' },
    { ...TaskStories.Default.args.task, id: '6', title: 'Task 6' },
  ],
};

export const WithPinnedTasks = Template.bind({});
WithPinnedTasks.args = {
  tasks: [
    ...Default.args.tasks.slice(0, 5),
    { id: '6', title: 'Task 6 (pinned)', state: TASK_PINNED },
  ],
};

export const Loading = Template.bind({});
Loading.args = {
  loading: true,
  tasks: [],
};

export const Empty = Template.bind({});
Empty.args = {
  loading: false,
  tasks: [],
};
