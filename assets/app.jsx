import React from 'react';
// 多语言
import { ConfigProvider } from 'antd';
import { IntlProvider, addLocaleData } from 'react-intl';
/*
 *引入与navigator.languages[0]所对应的语言；
 *如果没有引入对应的语言，会使用默认的“en”；
 *导致FormattedMessage的映射不会成功；
 */
import zh from 'react-intl/locale-data/zh';
import en from 'react-intl/locale-data/en';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Login from 'bundle-loader?lazy&name=login!pages/login/index';
import Layout from 'bundle-loader?lazy&name=layout!pages/layout/index';
import routerPath from './router/routerPath';
import Bundle from './router/bundle';
import langUtils from './utils/langUtils';
import messages from './lang/index';

addLocaleData([...zh, ...en]);
class App extends React.Component {
  render() {
    const currentLang = langUtils.getCurrentLang();
    return (
      <ConfigProvider locale={messages[currentLang].antdLocal}>
        <IntlProvider locale={currentLang} messages={messages[currentLang].local}>
          <BrowserRouter>
            <Switch>
              <Route exact path={routerPath.app.login} component={Bundle(Login)} />
              <Route path={routerPath.app.root} component={Bundle(Layout)} />
            </Switch>
          </BrowserRouter>
        </IntlProvider>
      </ConfigProvider>
    );
  }
}
export default App;
