/* eslint-disable no-shadow */
import React, { useCallback, useContext, useEffect, useState } from 'react';
import { getCities } from '../../api/api';
import { CityData } from '../../types/types';
import { AdressContext } from '../AdressContext';
import { Loader } from '../Loader';
import './CitySelect.scss';

export const CitySelect: React.FC = () => {
  const [cities, setCities] = useState<CityData[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const { areaValue, cityValue, setCityValue } = useContext(AdressContext);

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
    loadCities(areaValue);
  }, [areaValue]);

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
            defaultValue=""
            value={cityValue}
            onChange={(event) => {
              setCityValue(event.target.value);
            }}
          >
            <option value="">Будь ласка, оберіть населений пункт</option>
            {cities.map(city => (
              <option key={city.Ref} value={city.Ref}>
                {city.Description}
              </option>
            ))}
          </select>
        </label>
      )}
      {!isLoading && cities.length === 0 && (
        <p>Нажаль ми не обслуговуємо <br/>
        {'населені пункти в цій області :('}
        </p>
      )}
    </div>
  );
};
