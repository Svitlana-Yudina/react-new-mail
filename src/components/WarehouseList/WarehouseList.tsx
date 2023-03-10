import React, { useCallback, useContext, useEffect, useState } from 'react';
import { getWarehouses } from '../../api/api';
import { AdressData } from '../../types/types';
import { AdressContext } from '../AdressContext';
import { Loader } from '../Loader';
import { WarehouseItem } from '../WarehouseItem';
import './WarehouseList.scss';
import '../../additionalStyles/FailMessage.scss';

export const WarehouseList: React.FC = () => {
  const [warehouses, setWarehouses] = useState<AdressData[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const { cityValue } = useContext(AdressContext);
  const warehouseAmount = warehouses.length;

  const loadWarehouses = useCallback(async(city: string) => {
    setIsLoading(true);

    try {
      const warehousesFromServer = await getWarehouses(city);

      setWarehouses(warehousesFromServer);
    } catch (err) {
      throw new Error(`${err}`);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    loadWarehouses(cityValue);
  }, [cityValue]);

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
          <div className="warehouseList">
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
