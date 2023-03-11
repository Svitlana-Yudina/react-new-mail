import React, { useCallback, useState } from 'react';
import { getStatus } from '../../api/api';
import { StatusData } from '../../types/types';
import { GetStatus } from '../GetStatus';
import { Loader } from '../Loader';
import { StatusInfo } from '../StatusInfo';
import './Tracking.scss';

export const Tracking: React.FC = () => {
  const [ttnStatus, setTtnStatus] = useState<StatusData[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const loadStatus = useCallback(async(ttnNumber: string) => {
    setIsLoading(true);
    setTtnStatus([]);

    try {
      const statusFromServer = await getStatus(ttnNumber);
      // if Document number is not correct , statusFromServer will be []
      // Nova Poshta does have a TTN number format.
      // Not every 14 digits pass validation in their API.
      // I could not find out how do they check the numbers,
      // their support has not answered me yet.

      if (statusFromServer.length === 0) {
        setTtnStatus([{
          Number: '',
          WarehouseRecipient: '',
          CityRecipient: '',
          ActualDeliveryDate: '',
          ScheduledDeliveryDate: '',
          WarehouseSender: '',
          CitySender: '',
          DateCreated: '',
          Status: '',
          StatusCode: '',
        }]);
      } else {
        setTtnStatus(statusFromServer);
      }
    } catch (err) {
      throw new Error(`${err}`);
    } finally {
      setIsLoading(false);
    }
  }, []);

  return (
    <div className="tracking">
      <GetStatus load={loadStatus} />

      {isLoading && (
        <Loader />
      )}

      {ttnStatus.length !== 0 && (
        <StatusInfo
          ttnStatus={ttnStatus[0]}
        />
      )}
    </div>
  );
}
