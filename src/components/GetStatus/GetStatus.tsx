import React, { useState } from 'react';
import './GetStatus.scss';
import '../../additionalStyles/PrimaryButton.scss';

type Props = {
  load: (ttnNumber: string) => Promise<void>,
  setHistory: React.Dispatch<React.SetStateAction<string[]>>,
}

export const GetStatus: React.FC<Props> = ({ load, setHistory }) => {
  const ttnFormat = RegExp('[0-9]{14}');
  const [value, setValue] = useState('');
  const [isError, setIsError] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const isRightFormat = ttnFormat.test(value) && value.length === 14;

    if (!isRightFormat) {
      setIsError(true);
    } else {
      load(value);

      setHistory(prevHistory => {
        const uniqArray = prevHistory.includes(value)
          ? prevHistory.filter(el => el !== value)
          : prevHistory;

        return [
          value,
          ...uniqArray,
        ];
      });
    }
    setValue('');
  };

  return (
    <div className="getStatus">
      <form
        action="/"
        method="get"
        className="getStatus__form"
        onSubmit={handleSubmit}
      >
        <label>
          <input
            type="text"
            className="getStatus__input"
            placeholder="Введіть номер ТТН"
            value={value}
            onChange={(e) => {
              setIsError(false);
              setValue(e.target.value);
            }}
          />
        </label>

        <button className="getStatus__button primButton" type="submit">
          Отримати статус
        </button>
      </form>
      {isError && (
        <p className="getStatus__errors">
          Номер ТТН має складатись з 14 цифр.
        </p>
      )}
    </div>
  );
};
