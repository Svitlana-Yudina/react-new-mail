import React, { useState } from 'react';
import { GetStatus } from '../GetStatus';
import { BrowsingHistory } from '../BrowsingHistory';
import { Loader } from '../Loader';
import { StatusInfo } from '../StatusInfo';
import { useHistory } from '../../customHooks/useHistory';
import { useLoadStatus } from '../../customHooks/useLoadStatus';
import './Tracking.scss';
import { Question } from '../Question';

export const Tracking: React.FC = () => {
  const [value, setValue] = useState('');
  const [isError, setIsError] = useState(false);
  const { ttnHistory, setTtnHistory } = useHistory();
  const {
    loadStatus,
    ttnStatus,
    isLoading,
  } = useLoadStatus();

  return (
    <div className="tracking">
      <GetStatus
        load={loadStatus}
        setHistory={setTtnHistory}
        value={value}
        setValue={setValue}
        isError={isError}
        setIsError={setIsError}
      />

      <div className="tracking__container">
        <div className="wraper">
          {isLoading && (
            <Loader />
          )}

          {!isLoading && ttnStatus.length === 0 && (
            <Question message={
              'Введіть номер ТТН в поле вводу або оберіть з історії.'
            }/>
          )}
          {ttnStatus.length !== 0 && (
            <StatusInfo
              ttnStatus={ttnStatus[0]}
            />
          )}
        </div>

        <BrowsingHistory
          ttnHistory={ttnHistory}
          setValue={setValue}
          load={loadStatus}
          setIsError={setIsError}
          setHistory={setTtnHistory}
        />
      </div>
    </div>
  );
}
