import { useEffect, useState } from 'react';

export const useHistory = () => {
  const initialHistory = JSON.parse(
    localStorage.getItem('viewied_numbers') || '[]',
  );

  const [ttnHistory, setTtnHistory] = useState<string[]>(initialHistory);

  useEffect(() => {
    localStorage.setItem('viewied_numbers', JSON.stringify(ttnHistory));
  }, [ttnHistory]);

  return { ttnHistory, setTtnHistory };
};
