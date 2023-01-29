import { useState } from 'react';

export const useLocalStorage = (key, initalValue) => {
  const [value, setValue] = useState(
    JSON.parse(localStorage.getItem(key)) || initalValue,
  );

  const save = (val) => {
    setValue(val);
    localStorage.setItem(key, JSON.stringify(val));
  };

  return [value, save];
};
