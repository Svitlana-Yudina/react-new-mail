/* eslint-disable no-console */
import React, { useContext } from 'react';
import { AdressContext } from '../AdressContext';
import { AreasSelect } from '../AreasSelect';
import { CitySelect } from '../CitySelect';
import './WarehouseList.scss';

export const WarehouseList: React.FC = () => {
  const { areaValue } = useContext(AdressContext);

  return (
    <div className="warehouseList">
        <AreasSelect/>
        {areaValue && (
          <CitySelect />
        )}
        {/* <CitySelect /> */}
    </div>
  );
}
