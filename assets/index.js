/**只兼容到IE11**/
window.Promise = Promise;
/*************************/
import React from 'react';
import ReactDom from 'react-dom';
// 热加载
import { AppContainer } from 'react-hot-loader';

// mobx
import { Provider } from 'mobx-react';
import store from 'store/index';

import App from './app';

function renderWithHotReload(RootElement) {
  ReactDom.render(
    <AppContainer>
      <Provider {...store}>
        <RootElement />
      </Provider>
    </AppContainer>,
    document.getElementById('app')
  );
}

/*初始化*/
renderWithHotReload(App);

/*热更新*/
if (module.hot) {
  module.hot.accept('./app', () => {
    const App = require('./app').default;
    renderWithHotReload(App);
  });
}
