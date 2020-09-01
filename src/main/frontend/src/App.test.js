import React from 'react';
import { render } from '@testing-library/react';
import App_old from './App_old';

test('renders learn react link', () => {
  const { getByText } = render(<App_old />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
