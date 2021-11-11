import React, { createContext, useState } from 'react';
import CountriesAPI from './api/CountriesAPI';

export const GlobalState = createContext();

export const DataProvider = ({ children }) => {
  const [mode, setMode] = useState('dark');

  const toggleMode = () => {
    setMode(mode === 'dark' ? 'light' : 'dark');
  };

  const state = {
    mode,
    toggleMode,
    countriesAPI: CountriesAPI(),
  };

  return <GlobalState.Provider value={state}>{children}</GlobalState.Provider>;
};
