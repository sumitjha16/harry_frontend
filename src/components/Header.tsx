import React from 'react';
import { motion } from 'framer-motion';
import { Wand2 } from 'lucide-react';
import { House } from '../types';
import { useTheme } from '../hooks/useTheme';

const houseColors: Record<House, { primary: string; secondary: string }> = {
  gryffindor: { primary: 'bg-red-700', secondary: 'bg-yellow-500' },
  slytherin: { primary: 'bg-green-800', secondary: 'bg-gray-300' },
  ravenclaw: { primary: 'bg-blue-800', secondary: 'bg-bronze-400' },
  hufflepuff: { primary: 'bg-yellow-400', secondary: 'bg-black' },
};

export const Header: React.FC = () => {
  const { house, setHouse, theme, toggleTheme } = useTheme();

  return (
    <motion.header 
      className="fixed top-0 w-full bg-opacity-90 backdrop-blur-sm z-50 shadow-lg"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 100 }}
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Wand2 className="h-8 w-8" />
          <h1 className="text-2xl font-bold">Harry Potter Storybook AI</h1>
        </div>
        
        <div className="flex items-center space-x-6">
          <select
            value={house}
            onChange={(e) => setHouse(e.target.value as House)}
            className="px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800"
          >
            <option value="gryffindor">Gryffindor</option>
            <option value="slytherin">Slytherin</option>
            <option value="ravenclaw">Ravenclaw</option>
            <option value="hufflepuff">Hufflepuff</option>
          </select>
          
          <button
            onClick={toggleTheme}
            className="px-4 py-2 rounded-lg bg-gray-200 dark:bg-gray-700"
          >
            {theme === 'light' ? 'Nox' : 'Lumos'}
          </button>
        </div>
      </div>
    </motion.header>
  );
};