import React from 'react';
import { ThemeContext, themes } from './Theme-context';
import ThemeButton from './Themes-button';

function Toolbar(props) {
  return <ThemeButton onClick={props.changeTheme}>changeTheme</ThemeButton>;
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: themes.light
    };
    this.toggleTheme = () => {
      this.setState((state) => ({
        theme: state.theme === themes.dark ? themes.light : themes.dark
      }));
    };
  }
  render() {
    return (
      <div>
        <ThemeContext.Provider value={this.state.theme}>
          <Toolbar changeTheme={this.toggleTheme}></Toolbar>
        </ThemeContext.Provider>
        <div>
          <ThemeButton />
        </div>
      </div>
    );
  }
}
export default App;
