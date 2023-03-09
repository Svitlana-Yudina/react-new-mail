/* eslint-disable no-shadow */
import React, { useCallback, useContext, useEffect, useState } from 'react';
import { getAreas } from '../../api/api';
import { AreaData } from '../../types/types';
import { AdressContext } from '../AdressContext';
import { Loader } from '../Loader';
import './AreasSelect.scss';

export const AreasSelect: React.FC = () => {
  const [areas, setAreas] = useState<AreaData[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const { areaValue, setAreaValue } = useContext(AdressContext);

  const loadAreas = useCallback(async() => {
    setIsLoading(true);

    try {
      const areasFromServer = await getAreas();

      setAreas(areasFromServer);
    } catch (err) {
      throw new Error(`${err}`);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    loadAreas();
  }, []);

  return (
    <div className="areaSelect">
      {isLoading && (
        <Loader />
      )}
      {areas.length !== 0 && (
        <label className="areaSelect__label">
          <select
            className="areaSelect__select"
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
      {!isLoading && areas.length === 0 && (
        <p>{'Нажаль не вдалось завантажити дані :('}<br/>
            Спробуйте, будь ласка, пізніше.
        </p>
      )}
    </div>
  );
};
