import React from 'react';
import Navigation from './navigations';
import {theme} from './theme';
import {ThemeProvider} from 'styled-components/native';
import {stipopConfigure} from './functions/Stipop';

export default function App() {
  stipopConfigure();

  return (
    <ThemeProvider theme={theme}>
      <Navigation />
    </ThemeProvider>
  );
}
