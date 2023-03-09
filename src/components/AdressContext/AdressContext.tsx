/* eslint-disable @typescript-eslint/no-empty-function */
import React, { useState } from 'react';

interface ContextValues {
  areaValue: string;
  setAreaValue: React.Dispatch<React.SetStateAction<string>>;
}

export const AdressContext = React.createContext<ContextValues>({
  areaValue: '',
  setAreaValue: () => {},
});

type Props = {
  children: React.ReactNode;
};

export const AdressProvider: React.FC<Props> = ({ children }) => {
  const [areaValue, setAreaValue] = useState<string>('');

  const contextValue = {
    areaValue,
    setAreaValue,
  };

  return (
    <AdressContext.Provider value={contextValue}>
      {children}
    </AdressContext.Provider>
  );
};
