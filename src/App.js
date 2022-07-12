import React from 'react';
import Navigation from './navigations';
import {theme} from './theme';
import {ThemeProvider} from 'styled-components/native';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Navigation />
    </ThemeProvider>
  );
}
