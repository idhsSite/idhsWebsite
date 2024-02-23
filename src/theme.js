import React, { createContext, useState, useContext } from 'react';
import { createTheme } from '@mui/material/styles';
const ThemeContext = createContext();

const theme = createTheme();
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState({
    primaryColor: '#7258BC',
    secondaryColor: '#00B29A',
  });

  const updateTheme = (newTheme) => {
    setTheme((prevTheme) => ({ ...prevTheme, ...newTheme }));
  };

  return (
    <ThemeContext.Provider value={{ theme, updateTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  return useContext(ThemeContext);
};
export default theme;