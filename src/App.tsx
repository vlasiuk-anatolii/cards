import React from 'react';
import './App.scss';
import { Card } from './components';
import movies from './api/movies.json';

export const App: React.FC = () => {
  return (
    <div className="catalog">
      <Card films={movies} />
    </div>
  );
};
