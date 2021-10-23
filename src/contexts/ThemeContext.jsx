import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [isDarkMode, setisDarkMode] = useState(false);

  const handleDarkMode = () => {
    setisDarkMode(!isDarkMode);
  };

  return (
    <ThemeContext.Provider value={{ isDarkMode, toogleMode: handleDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
}

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
