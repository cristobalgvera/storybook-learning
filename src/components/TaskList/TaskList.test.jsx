import { render } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
import * as TaskListStories from './TaskList.stories';

const { WithPinnedTasks, WithArchivedTasks } = composeStories(TaskListStories);

describe('task list with pinned task', () => {
  it('should renders pinned tasks at the start of the list', () => {
    const { container } = render(<WithPinnedTasks />);
    expect(
      container.querySelector(
        '.list-item:first-child input[value="Task 6 (pinned)"]',
      ),
    ).not.toBeNull();
  });
});

describe('task list with archived task', () => {
  it('should renders archived tasks at the end of the list', () => {
    const { container } = render(<WithArchivedTasks />);
    expect(
      container.querySelector(
        '.list-item:last-child input[value="Task 6 (archived)"]',
      ),
    ).not.toBeNull();
  });
});
