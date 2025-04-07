import { createContext, useState } from "react";
import { THEME_STORAGE } from "../constance";

export const ThemeContext = createContext(null);

export const ThemeProvider = ({ children }) => {
  const savedTheme = localStorage.getItem(THEME_STORAGE || "Light");

  const [theme, setTheme] = useState(savedTheme);

  return <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>;
};
