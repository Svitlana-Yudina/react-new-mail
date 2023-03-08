import React from 'react';
import { Actions } from '../../types/types';
import './StartButton.scss';

type Props = {
  type: Actions,
  setOption: React.Dispatch<React.SetStateAction<string>>
}

export const StartButton: React.FC<Props> = ({ type, setOption }) => {
  return (
    <button
      type="button"
      className="button"
      onClick={() => setOption(type)}
    >
      {type}
    </button>
  );
}
