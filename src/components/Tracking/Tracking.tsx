/* eslint-disable no-console */
import React, { useCallback, useState } from 'react';
import { getStatus } from '../../api/api';
import { StatusData } from '../../types/types';
import { GetStatus } from '../GetStatus';
import './Tracking.scss';

export const Tracking: React.FC = () => {
  const [ttnStatus, setTtnStatus] = useState<StatusData[]>([]);

  const loadStatus = useCallback(async(ttnNumber: string) => {
    try {
      const statusFromServer = await getStatus(ttnNumber);

      console.log('from server', statusFromServer);

      setTtnStatus(statusFromServer);
    } catch (err) {
      console.log('catch', err);
      throw new Error(`${err}`);
    }
  }, []);

  return (
    <div className="tracking">
      <GetStatus load={loadStatus} />
    </div>
  );
}
