import { render } from '@testing-library/react';
import React from 'react';
import Provider from './context/Provider';

const renderWithProvider = (Component) => {
  return {
    ...render(<Provider>{Component}</Provider>),
  };
};

export default renderWithProvider;
