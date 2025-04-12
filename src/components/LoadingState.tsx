import React from 'react';
import { motion } from 'framer-motion';

interface LoadingStateProps {
  type: 'chat' | 'summary';
}

export const LoadingState: React.FC<LoadingStateProps> = ({ type }) => {
  const chatQuotes = [
    "Mischief is being managed...",
    "The sorting hat is thinking...",
    "Asking the Room of Requirement...",
    "Consulting with Professor Dumbledore...",
    "Checking the Marauder's Map...",
    "Summoning the answer with Accio...",
  ];

  const summaryQuotes = [
    "Diving into the Pensieve...",
    "Researching in the Hogwarts library...",
    "Checking the restricted section...",
    "Consulting with The Daily Prophet...",
    "Reviewing notes from History of Magic...",
    "Flipping through Fantastic Beasts...",
  ];

  const quotes = type === 'chat' ? chatQuotes : summaryQuotes;
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex flex-col items-center justify-center p-6 magical-blur rounded-lg"
    >
      <div className="w-12 h-12 mb-4 relative">
        <motion.div
          className="absolute w-12 h-12 rounded-full border-4 border-t-transparent"
          animate={{ rotate: 360 }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
        />
      </div>
      <p className="text-center font-medium">{randomQuote}</p>
    </motion.div>
  );
};
