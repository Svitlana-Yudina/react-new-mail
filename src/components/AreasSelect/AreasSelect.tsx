/* eslint-disable no-shadow */
import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getAreas } from '../../api/api';
import { AreaData } from '../../types/types';
import { Loader } from '../Loader';
import './AreasSelect.scss';
import '../../additionalStyles/FailMessage.scss';
import { useAppSelector } from '../../api/reduxStore/hooks';
import { areaActions } from '../../api/reduxStore/area';
import { cityActions } from '../../api/reduxStore/city';

export const AreasSelect: React.FC = () => {
  const dispatch = useDispatch();
  const area = useAppSelector(state => state.area);
  const [areas, setAreas] = useState<AreaData[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const loadArea = (areaToLoad: string) => (
    dispatch(areaActions.load(areaToLoad))
  );

  const clearCity = () => (
    dispatch(cityActions.clear())
  );

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
            value={area}
            onChange={(event) => {
              loadArea(event.target.value);
              clearCity();
            }}
          >
            <option value="">Будь ласка, оберіть область</option>
            {areas.map(areaItem => (
              <option key={areaItem.Ref} value={areaItem.Ref}>
                {areaItem.Description}
              </option>
            ))}
          </select>
        </label>
      )}
      {!isLoading && areas.length === 0 && (
        <p className="failMessage">
          {'Нажаль не вдалось завантажити дані :('}<br/>
          Спробуйте, будь ласка, пізніше.
        </p>
      )}
    </div>
  );
};
