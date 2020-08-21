import React from 'react';
import { ThemeContext } from './Theme-context';

function ThemeTogglerButton() {
  // Theme Toggler 按钮不仅仅只获取theme值，它也从 context 中获取到一个toggleTheme函数
  return (
    <ThemeContext.Consumer>
      {({ theme, toggleTheme }) => (
        <button onClick={toggleTheme} style={{ backgroundColor: theme.background }}>
          toggle theme
        </button>
      )}
    </ThemeContext.Consumer>
  );
}
export default ThemeTogglerButton;
