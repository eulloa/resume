import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders TS Particles', () => {
  const { container } = render(<App />);
  expect(container.querySelector('#tsparticles')).toBeInTheDocument();
});
