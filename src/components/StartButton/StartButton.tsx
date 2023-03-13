import React from 'react';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';

import { Actions } from '../../types/types';
import '../../additionalStyles/PrimaryButton.scss';
import './StartButton.scss';

type Props = {
  type: Actions,
  to: string,
}

export const StartButton: React.FC<Props> = ({ type, to }) => {
  return (
    <NavLink
      className={({ isActive }) => classNames(
        'button primButton',
        { 'button__active': isActive },
      )}
      to={to}
    >
      {type}
    </NavLink>
  );
}
