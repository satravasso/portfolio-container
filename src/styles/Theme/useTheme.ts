import { useEffect, useState } from "react";
import { setLocalStorage, getLocalStorage } from "../../utils/storage";

export const useTheme = () => {
  const themes = getLocalStorage("all-themes");
  const [theme, setTheme] = useState(themes.yellow);
  const [themeLoaded, setThemeLoaded] = useState(false);

  const setMode = (mode: any) => {
    setLocalStorage("theme", mode);
    setTheme(mode);
  };

  useEffect(() => {
    const localTheme = getLocalStorage("theme");
    localTheme ? setTheme(localTheme) : setTheme(themes.yellow);
    setThemeLoaded(true);
  }, []);

  return { theme, themeLoaded, setMode };
};