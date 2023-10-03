import { createContext, useState } from "react";
import { IThemeContext, IThemeContextProvider } from "../Interfaces/IThemeContext";

export const ThemeContext = createContext<IThemeContext>({
  darkMode: false,
  toggleDarkMode: () => {},
});

const ThemeContextProvider = ({ children }: IThemeContextProvider) => {
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const toggleDarkMode: () => void = () => {
    setDarkMode((prevState) => !prevState);
  };

  return (
    <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
