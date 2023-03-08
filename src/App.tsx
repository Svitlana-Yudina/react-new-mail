import React from 'react';
import './App.scss';
import { StartButton } from './components/StartButton';
import { Actions } from './types/types';

export const App: React.FC = () => {
  return (
    <div className="app">
      <div className="app__menu">
        <StartButton type={Actions.track} to="/track"/>
        <StartButton type={Actions.adresses} to="/adresses"/>
      </div>
    </div>
  );
}
