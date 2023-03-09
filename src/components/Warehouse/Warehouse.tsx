/* eslint-disable no-console */
import React, { useContext } from 'react';
import { AdressContext } from '../AdressContext';
import { AreasSelect } from '../AreasSelect';
import { CitySelect } from '../CitySelect';
import { WarehouseList } from '../WarehouseList';
import './Warehouse.scss';

export const Warehouse: React.FC = () => {
  const { areaValue, cityValue } = useContext(AdressContext);

  return (
    <div className="warehouse">
        <AreasSelect/>
        {areaValue && (
          <CitySelect />
        )}
        {cityValue && (
          <WarehouseList />
        )}
    </div>
  );
}
