import React, { useContext } from 'react'
import { AppContext } from '../AppProvider';

const ThemeSwitcher = () => {
  const { toggleTheme, themeMode } = useContext(AppContext);
  const handleThemeChange = (e) => {
    toggleTheme();
  };

  return <label className="switch">
    <input onChange={handleThemeChange} class='switch-checkbox' type='checkbox'></input>
    <div class='switch-slot'>
      <div class='sun-icon-wrapper'>
        <div class="iconify sun-icon" data-icon="feather-sun" data-inline="false"></div>
      </div>
      <div class='switch-button'></div>
      <div class='moon-icon-wrapper'>
        <div class="iconify moon-icon" data-icon="feather-moon" data-inline="false"></div>
      </div>
    </div>
  </label>
}

export default ThemeSwitcher;
