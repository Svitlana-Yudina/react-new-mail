import React from 'react';
import { AdressProvider } from '../AdressContext';
import { AreasSelect } from '../AreasSelect';
import './WarehouseList.scss';

export const WarehouseList: React.FC = () => {
  return (
    <div className="warehouseList">
      <AdressProvider>
        <AreasSelect/>
      </AdressProvider>
      {/* {areas.length !== 0 && (
        <label className="warehouseList__label">
          <select
            name="areas"
            value={areaValue}
            onChange={(event) => {
              setAreaValue(event.target.value);
            }}
          >
            <option value="">Будь ласка, оберіть область</option>
            {areas.map(area => (
              <option key={area.Ref} value={area.Ref}>
                {area.Description}
              </option>
            ))}
          </select>
        </label>
      )} */}
    </div>
  );
}
