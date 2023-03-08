import React from 'react';
import { Actions } from '../../types/types';
import './StartButton.scss';

type Props = {
  type: Actions,
}

export const StartButton: React.FC<Props> = ({ type }) => {
  return (
    <button type="button" className="button">
      {type}
    </button>
  );
}
