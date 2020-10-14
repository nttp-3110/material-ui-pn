import React from 'react';
import { select } from '@storybook/addon-knobs';
import { ThemeProvider } from '@material-ui/core/styles';

import theme from './theme';

const themes = { Default: theme };
const themeNames = Object.keys(themes);
export default ({ children }) => {

  const theme = select(
    'Theme',
    themeNames
  );

  return (
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  );
};