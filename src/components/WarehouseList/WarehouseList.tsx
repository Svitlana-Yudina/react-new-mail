import React, { useCallback, useEffect, useState } from 'react';
import { getWarehouses } from '../../api/api';
import { AdressData } from '../../types/types';
import { Loader } from '../Loader';
import { WarehouseItem } from '../WarehouseItem';
import './WarehouseList.scss';
import '../../additionalStyles/FailMessage.scss';
import '../../additionalStyles/ContainerStyles.scss';
import { useAppSelector } from '../../api/reduxStore/hooks';

export const WarehouseList: React.FC = () => {
  const [warehouses, setWarehouses] = useState<AdressData[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const city = useAppSelector(state => state.city);
  const warehouseAmount = warehouses.length;

  const loadWarehouses = useCallback(async(cityRef: string) => {
    setIsLoading(true);

    try {
      const warehousesFromServer = await getWarehouses(cityRef);

      setWarehouses(warehousesFromServer);
    } catch (err) {
      throw new Error(`${err}`);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    loadWarehouses(city);
  }, [city]);

  return (
    <>
      {isLoading && (
        <Loader />
      )}
      {!isLoading && warehouses.length !== 0 && (
        <>
          <p className="amount-message">
            {`Знайдено відділень: ${warehouseAmount}`}
          </p>
          <div className="warehouseList list">
            {warehouses.map(warehouse => (
              <WarehouseItem key={warehouse.Ref} item={warehouse}/>
            ))}
          </div>
        </>
      )}
      {!isLoading && warehouses.length === 0 && (
        <p className="failMessage">Нажаль, немає відділень<br/>
        {'у цьому населеному пункті :('}
        </p>
      )}
    </>
  );
};
