/* eslint-disable no-console */
import React from 'react';
import { useAppSelector } from '../../api/reduxStore/hooks';
import { AreasSelect } from '../AreasSelect';
import { CitySelect } from '../CitySelect';
import { WarehouseList } from '../WarehouseList';
import './Warehouse.scss';

export const Warehouse: React.FC = () => {
  const city = useAppSelector(state => state.city);
  const area = useAppSelector(state => state.area);

  return (
    <div className="warehouse">
        <AreasSelect/>
        {area && (
          <CitySelect />
        )}
        {city && (
          <WarehouseList />
        )}
    </div>
  );
}
