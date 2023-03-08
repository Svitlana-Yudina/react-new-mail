import React from 'react';
import './app.scss';
import { StartButton } from './components/StartButton';
import { Actions } from './types/types';

export const App: React.FC = () => {
  return (
    <div className="app">
      <StartButton type={Actions.TRACK}/>
      <StartButton type={Actions.ADRESS}/>
    </div>
  );
}
