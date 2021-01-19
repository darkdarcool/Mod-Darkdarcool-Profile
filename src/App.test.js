import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import Search from './App'

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const { getByText } = render(<Search />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
