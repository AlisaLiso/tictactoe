import React, { useContext } from 'react'
import { AppContext } from '../AppProvider';

const ThemeSwitcher = () => {
  const { toggleTheme, themeMode } = useContext(AppContext);
  const handleThemeChange = (e) => {
    toggleTheme();
  };

  return <label className="switch">
    <input onChange={handleThemeChange} className='switch-checkbox' type='checkbox'></input>
    <div className='switch-slot'>
      <div className='sun-icon-wrapper'>
        <div className="iconify sun-icon" data-icon="feather-sun" data-inline="false"></div>
      </div>
      <div className='switch-button'></div>
      <div className='moon-icon-wrapper'>
        <div className="iconify moon-icon" data-icon="feather-moon" data-inline="false"></div>
      </div>
    </div>
  </label>
}

export default ThemeSwitcher;
