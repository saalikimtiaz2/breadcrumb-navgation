import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { ThemeContext } from '../../contexts/ThemeContext';
import Navbar from '../Navbar';

function Layout({ children }) {
  const { isDarkMode } = useContext(ThemeContext);
  return (
    <div className={`h-screen ${isDarkMode ? 'bg-gray-600' : ''}`}>
      <Navbar />
      {children}
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
