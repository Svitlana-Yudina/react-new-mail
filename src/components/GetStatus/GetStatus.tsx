import React, { useState } from 'react';
import './GetStatus.scss';

export const GetStatus: React.FC = () => {
  const ttnFormat = RegExp('[0-9]{14}');
  const [value, setValue] = useState('');
  const [isError, setIsError] = useState(false);

  return (
    <div className="getStatus">
      <form
        action="/"
        method="get"
        className="getStatus__form"
        onSubmit={(e) => {
          e.preventDefault();

          const isRightFormat = ttnFormat.test(value);

          if (!isRightFormat) {
            setIsError(true);
          }
          setValue('');
        }}
      >
        <label htmlFor="">
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
        <button className="getStatus__button" type="submit">
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
