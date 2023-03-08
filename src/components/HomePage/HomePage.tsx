import React from 'react';
import './HomePage.scss';

export const HomePage: React.FC = () => {
  return (
    <div className="homepage">
      <h1 className="homepage__title">
        Що бажаєте переглянути?
      </h1>
      <div className="homepage__image"></div>
    </div>
  );
}
