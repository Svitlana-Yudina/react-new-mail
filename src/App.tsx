import React, { useState } from 'react';
import './app.scss';
import { StartButton } from './components/StartButton';
import { Actions } from './types/types';

export const App: React.FC = () => {
  const [option, setOption] = useState<Actions | string>('');

  return (
    <div className="app">
      <div className="app__menu">
        <StartButton type={Actions.TRACK} setOption={setOption}/>
        <StartButton type={Actions.ADRESS} setOption={setOption}/>
      </div>
    </div>
  );
}
