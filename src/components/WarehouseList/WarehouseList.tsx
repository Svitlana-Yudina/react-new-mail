/* eslint-disable no-shadow */
import React, { useCallback, useEffect, useState } from 'react';
import { getAreas } from '../../api/api';
import { AreaData } from '../../types/types';
import './WarehouseList.scss';

export const WarehouseList: React.FC = () => {
  const [areas, setAreas] = useState<AreaData[]>([]);
  const [areaValue, setAreaValue] = useState<string>('');

  const loadAreas = useCallback(async() => {
    const areasFromServer = await getAreas();

    setAreas(areasFromServer);
  }, []);

  useEffect(() => {
    loadAreas();
  }, []);

  return (
    <div className="warehouseList">
      {areas.length !== 0 && (
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
      )}
      {/* <label className="warehouseList__label">
        <select name="areas">
          <option value="">Будь ласка, оберіть область</option>
          <option value=""></option>
        </select>
      </label> */}
    </div>
  );
}
