import { render, screen } from '@testing-library/react';
import Task from './Task';

const task = {
  title: 'Test Task',
};

describe('Task component', () => {
  it('should renders without crashing', () => {
    const component = render(<Task task={task} />);
    expect(component).toBeTruthy();
  });
});

describe('Task input', () => {
  it('should have an input field with value given as task.title', async () => {
    render(<Task task={task} />);
    const input = await screen.findByTestId('task-input');
    expect(input.value).toBe(task.title);
  });

  it('should render an input with readonly value', async () => {
    render(<Task task={task} />);
    const input = await screen.findByTestId('task-input');
    expect(input).toHaveAttribute('readonly');
  });

  it('should render an input of type text', async () => {
    render(<Task task={task} />);
    const input = await screen.findByTestId('task-input');
    expect(input).toHaveAttribute('type', 'text');
  });

  it('should be wrapped in a div tag', async () => {
    render(<Task task={task} />);
    const div = await screen.findByTestId('wrapper');
    expect(div).toBeInTheDocument();
    expect(div.innerHTML).toContain(task.title);
  });
});
