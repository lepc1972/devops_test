import { render, screen } from '@testing-library/react';
import App from './App';
import React from 'react';

test('renders learn Jenkins link', () => {
  render(<App />);
  const linkElement = screen.getByText(/LEPC72/i);
  expect(linkElement).toBeInTheDocument();
});
