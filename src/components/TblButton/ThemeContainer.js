import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';

import theme from './theme';

export default ({ children }) => {

  return (
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  );
};