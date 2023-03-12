import React from 'react';
import './Question.scss';

type Props = {
  message: string,
};

export const Question: React.FC<Props> = React.memo(
  function Question({ message }: Props) {
    return (
      <div className="question">
        <h1 className="question__title">
          {message}
        </h1>
        <div className="question__image"></div>
      </div>
    );
  },
);
