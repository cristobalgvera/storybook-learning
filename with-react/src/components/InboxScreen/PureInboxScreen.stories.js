import { configureStore, createSlice } from '@reduxjs/toolkit';
import { userEvent, waitFor, within } from '@storybook/testing-library';
import { Provider } from 'react-redux';
import { tasksReducers } from '../../lib/store/features/tasks/tasksReducers';
import * as TaskListStories from '../TaskList/PureTaskList.stories';
import PureInboxScreen from './PureInboxScreen';

const mockStore = configureStore({
  reducer: {
    tasks: createSlice({
      name: 'tasks',
      initialState: TaskListStories.Default.args.tasks,
      reducers: tasksReducers,
    }).reducer,
  },
});

export default {
  title: 'PureInboxScreen',
  component: PureInboxScreen,
  decorators: [(story) => <Provider store={mockStore}>{story()}</Provider>],
};

const Template = (args) => <PureInboxScreen {...args} />;

export const Default = Template.bind({});

export const Error = Template.bind({});
Error.args = {
  hasError: true,
};

export const WithInteraction = Template.bind({});
WithInteraction.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  await waitFor(() => {
    userEvent.click(canvas.getByLabelText('pinTask-1'));
    userEvent.click(canvas.getByLabelText('pinTask-3'));
  });
};
