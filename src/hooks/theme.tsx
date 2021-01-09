import React, { useMemo } from 'react';

import { CssBaseline } from '@material-ui/core';
import {
  createMuiTheme,
  ThemeProvider as MuiThemeProvider,
} from '@material-ui/core/styles';

import { useDarkMode } from './darkMode';

export const ThemeProvider: React.FC = ({ children }) => {
  const { darkMode } = useDarkMode();

  const theme = useMemo(() => {
    return createMuiTheme({
      palette: {
        type: darkMode ? 'dark' : 'light',
        primary: {
          main: darkMode ? '#00bcd4' : '#673ab7',
        },
        text: {
          primary: darkMode ? '#00bcd4' : '#673ab7',
        },
      },
      typography: {
        fontFamily: `'Open Sans', sans-serif`,
      },
    });
  }, [darkMode]);

  return (
    <MuiThemeProvider theme={theme}>
      {children}
      <CssBaseline />
    </MuiThemeProvider>
  );
};
