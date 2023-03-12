/* eslint-disable no-shadow */
import React from 'react';
import '../../additionalStyles/FailMessage.scss';
import '../../additionalStyles/ContainerStyles.scss';
import './BrowsingHistory.scss';

type Props = {
  ttnHistory: string[],
  setValue: React.Dispatch<React.SetStateAction<string>>,
  load: (ttnNumber: string) => Promise<void>,
  setIsError: React.Dispatch<React.SetStateAction<boolean>>,
};

export const BrowsingHistory: React.FC<Props> = ({
  ttnHistory,
  setValue,
  load,
  setIsError,
}) => {
  return (
    <div className="history list">
      <div className="history__wraper">
        <h2 className="history__title">
          Історія переглядів
        </h2>
        {ttnHistory.length === 0 && (
          <p className="failMessage">
            Ви поки що не переглянули жодної ТТН
          </p>
        )}
        {ttnHistory.length > 0 && (
          <>
            {ttnHistory.map(item => (
              <a
                key={item}
                href="/"
                className="history__item"
                onClick={(event) => {
                  event.preventDefault();
                  setIsError(false);
                  setValue(item);
                  load(item);
                }}
              >
                {item}
              </a>
            ))}
          </>
        )}
      </div>
      <button type="button" className="history__clear">
        Очистити історію
      </button>
    </div>
  );
};
