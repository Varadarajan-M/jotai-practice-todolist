import { useAtom } from "jotai";

import { themeAtom } from "../jotai/theme/store";

const ThemeSwitch = () => {
  const [theme, setTheme] = useAtom(themeAtom);
  const toggleTheme = () =>
    setTheme((theme) => (theme === "dark" ? "light" : "dark"));

  return (
    <button className="topbar__theme-switch" onClick={toggleTheme}>
      Switch Theme : {theme?.toUpperCase()}
    </button>
  );
};

export default ThemeSwitch;
