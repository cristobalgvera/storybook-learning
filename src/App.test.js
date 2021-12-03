import { render } from '@testing-library/react';
import App from './App';

describe('app', () => {
  it('should renders without crashing', () => {
    const { container } = render(<App />);
    expect(container).toBeDefined();
  });
});
