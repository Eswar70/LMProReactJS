import React, { useContext } from 'react';
import { ThemeContext } from '../../theme/ThemeContext';

const Header = () => {
  const { darkMode, setDarkMode } = useContext(ThemeContext);

  return (
    <header className="w-full bg-white dark:bg-gray-800 shadow p-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold text-gray-800 dark:text-white pl-10 lg:pl-0 ">Dashboard</h1>
      <div className="flex space-x-4 items-center">
        <button onClick={() => setDarkMode(!darkMode)} className="text-gray-600 dark:text-gray-300">
          {darkMode ? '🌞' : '🌙'}
        </button>
        <button className="text-gray-600 dark:text-gray-300">🔔</button>
        <button className="text-gray-600 dark:text-gray-300">👤</button>
      </div>
    </header>
  );
};

export default Header;
