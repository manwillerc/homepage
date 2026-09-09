import React from 'react';
import { render, screen } from '@testing-library/react';
import { HashRouter } from 'react-router-dom';
import App from './App';

test('renders the site navigation', () => {
  render(
    <HashRouter>
      <App />
    </HashRouter>
  );
  expect(screen.getByRole('navigation', { name: /main navigation/i })).toBeInTheDocument();
  expect(screen.getByRole('link', { name: /caden manwiller home/i })).toBeInTheDocument();
});
