import React from 'react';
import { LoadingState as InteractiveLoading } from './InteractiveLoading';

interface LoadingStateProps {
  type: 'chat' | 'summary';
  onComplete?: () => void;
}

export const LoadingState: React.FC<LoadingStateProps> = ({ type, onComplete }) => {
  return <InteractiveLoading type={type} onComplete={onComplete} />;
};
