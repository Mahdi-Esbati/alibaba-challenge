import { useState } from 'react';

const DARK_MODE_ATTRIBUTE = 'data-theme';

function useDarkMode() {
  const [isDarkModeEnabled, setIsDarkModeEnabled] = useState(getDarkModeState());

  function getDarkModeState() {
    return document.documentElement.getAttribute(DARK_MODE_ATTRIBUTE) === 'dark';
  }

  function toggleDarkMode() {
    const isDarkModeEnabled = getDarkModeState();
    if (isDarkModeEnabled) {
      document.documentElement.setAttribute('data-theme', 'light');
    } else {
      document.documentElement.setAttribute('data-theme', 'dark');
    }
    setIsDarkModeEnabled(!isDarkModeEnabled);
  }

  return { isDarkModeEnabled, toggleDarkMode };
}

export default useDarkMode;
