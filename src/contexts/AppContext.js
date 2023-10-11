import React, { createContext, useState, useContext } from 'react';

const AppContext = createContext();

export const useAppContext = () => {
  return useContext(AppContext);
};

export const AppProvider = ({ children }) => {
  const [totalAmount, setTotalAmount] = useState(0);

  return (
    <AppContext.Provider value={{ totalAmount, setTotalAmount }}>
      {children}
    </AppContext.Provider>
  );
};