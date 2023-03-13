/* eslint-disable no-shadow */
import React, { useCallback } from 'react';
import '../../additionalStyles/FailMessage.scss';
import '../../additionalStyles/ContainerStyles.scss';
import '../../additionalStyles/PrimaryButton.scss';
import './BrowsingHistory.scss';

type Props = {
  ttnHistory: string[],
  setValue: React.Dispatch<React.SetStateAction<string>>,
  load: (ttnNumber: string) => Promise<void>,
  setIsError: React.Dispatch<React.SetStateAction<boolean>>,
  setHistory: React.Dispatch<React.SetStateAction<string[]>>,
};

export const BrowsingHistory: React.FC<Props> = React.memo(
  function BrowsingHistory({
    ttnHistory,
    setValue,
    load,
    setIsError,
    setHistory,
  }: Props) {
    const handleTTNClick = useCallback((
      event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
      item: string,
    ) => {
      event.preventDefault();
      setIsError(false);
      setValue(item);
      load(item);

      setHistory(prevHistory => {
        const filteredHistory = prevHistory.filter(el => el !== item);

        return [
          item,
          ...filteredHistory,
        ];
      });
    }, []);

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
                    handleTTNClick(event, item);
                  }}
                >
                  {item}
                </a>
              ))}
            </>
          )}
        </div>
        <button
          type="button"
          className="history__clear primButton"
          onClick={() => {
            setHistory([]);
          }}
        >
          Очистити історію
        </button>
      </div>
    );
  },
);
