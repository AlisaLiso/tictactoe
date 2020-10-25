import React, { useContext } from 'react'
import { AppContext } from '../AppProvider';

const ThemeSwitcher = () => {
  const { toggleTheme, themeMode } = useContext(AppContext);
  const handleThemeChange = (e) => {
    toggleTheme();
  };

  return <label className="switch">
    <input type="checkbox" />
    <span className="slider round" onClick={handleThemeChange}></span>
  </label> // <div className="yin-yang" onClick={handleThemeChange}></div>
}

export default ThemeSwitcher;
