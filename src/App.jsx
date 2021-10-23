import React from 'react';
import Router from './Router';
import { ThemeProvider } from './contexts/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <Router />
    </ThemeProvider>
  );
}

export default App;
