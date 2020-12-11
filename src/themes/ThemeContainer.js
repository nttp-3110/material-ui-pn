import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import ScopedCssBaseline from '@material-ui/core/ScopedCssBaseline';

import customTheme from '.';

export default ({ children }) => {

  return (
    <ThemeProvider theme={customTheme}>
      <ScopedCssBaseline>
        {children}
      </ScopedCssBaseline>
    </ThemeProvider>
  );
};