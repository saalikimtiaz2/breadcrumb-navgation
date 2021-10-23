import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../../contexts/ThemeContext';

function Navbar() {
  const { isDarkMode, toogleMode } = useContext(ThemeContext);
  return (
    <div
      className={`py-4 shadow-lg ${
        isDarkMode ? 'bg-gray-200' : 'bg-gray-800 text-white'
      }`}
    >
      <div className="lg:container lg:mx-auto bg-green flex items-center justify-between px-4 ">
        <div className="flex items-center justify-center" role="none">
          <label htmlFor="toggle" className="flex items-center cursor-pointer">
            <div className="relative">
              <input
                type="checkbox"
                id="toggle"
                className="sr-only"
                onClick={toogleMode}
              />
              <div className="w-6 h-2 bg-gray-400 rounded-full shadow-inner" />
              <div className="dot absolute w-4 h-4 rounded-full bg-white shadow -left-1 -top-1 transition" />
            </div>
            <div
              className={`ml-3 text-sm font-medium ${
                isDarkMode ? 'text-black' : 'text-white'
              }`}
            >
              Dark Mode
            </div>
          </label>
        </div>
        <ul className="list">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/project">Project</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
