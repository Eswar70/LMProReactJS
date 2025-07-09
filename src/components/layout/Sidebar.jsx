import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../../theme/ThemeContext';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { darkMode } = useContext(ThemeContext);

  return (
    <div>
      <div className="lg:hidden flex items-center justify-between p-4 bg-white dark:bg-gray-800 absolute top-[4px] left-0">
        <button onClick={() => setIsOpen(true)} className="text-gray-800 dark:text-white font-bold">
          ☰
        </button>
      </div>

      {isOpen && <div
        className="fixed inset-0 bg-opacity-50 z-30 lg:hidden bg-black"
        onClick={() => setIsOpen(false)}
      />}

      <nav className={`
            fixed z-40 top-0 left-0 h-full w-64 p-4 transform transition-transform
            ${isOpen ? 'translate-x-0' : '-translate-x-full'}
            lg:static lg:translate-x-0
            ${darkMode ? 'bg-gray-900' : 'bg-white'}
        `}>
        <button
          onClick={() => setIsOpen(false)}
          className="block mb-4 text-gray-600 dark:text-gray-300 lg:hidden font-bold"
        >
          ✕
        </button>
        <ul className="space-y-4">
          <li><Link to="/" onClick={() => setIsOpen(false)} className="text-gray-800 dark:text-white">Overview</Link></li>
          <li><Link to="/settings" onClick={() => setIsOpen(false)} className="text-gray-800 dark:text-white">Settings</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
