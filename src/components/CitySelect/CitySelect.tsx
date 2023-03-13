/* eslint-disable no-shadow */
import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { getCities } from '../../api/api';
import { useAppSelector } from '../../api/reduxStore/hooks';
import { cityActions } from '../../api/reduxStore/city';

import { Loader } from '../Loader';
import { CityData } from '../../types/types';
import './CitySelect.scss';
import '../../additionalStyles/FailMessage.scss';

export const CitySelect: React.FC = () => {
  const dispatch = useDispatch();
  const city = useAppSelector(state => state.city);
  const area = useAppSelector(state => state.area);
  const [cities, setCities] = useState<CityData[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const loadCity = (cityToLoad: string) => (
    dispatch(cityActions.load(cityToLoad))
  );

  const loadCities = useCallback(async(area: string) => {
    setIsLoading(true);

    try {
      const citiesFromServer = await getCities(area);

      setCities(citiesFromServer);
    } catch (err) {
      throw new Error(`${err}`);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    loadCities(area);
  }, [area]);

  return (
    <div className="citySelect">
      {isLoading && (
        <Loader />
      )}
      {!isLoading && cities.length !== 0 && (
        <label className="citySelect__label">
          <select
            className="citySelect__select"
            name="cities"
            value={city}
            onChange={(event) => {
              loadCity(event.target.value);
            }}
          >
            <option value="">Будь ласка, оберіть населений пункт</option>
            {cities.map(cityItem => (
              <option key={cityItem.Ref} value={cityItem.Ref}>
                {cityItem.Description}
              </option>
            ))}
          </select>
        </label>
      )}
      {!isLoading && cities.length === 0 && (
        <p className="failMessage">
          Нажаль ми не обслуговуємо <br/>
          {'населені пункти в цій області :('}
        </p>
      )}
    </div>
  );
};
