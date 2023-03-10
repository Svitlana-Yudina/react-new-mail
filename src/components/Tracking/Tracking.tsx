import React from 'react';
import { GetStatus } from '../GetStatus';
import './Tracking.scss';

export const Tracking: React.FC = () => {
  return (
    <div className="tracking">
      <GetStatus />
    </div>
  );
}
