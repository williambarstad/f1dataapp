import { render, screen } from '@testing-library/react';
import App from './App';

test('Renders Homepage', () => {
  render(<App />);
  const hpMessage = screen.getByText(/Formula 1 Data Browser/i);
  expect(hpMessage).toBeInTheDocument();
});
