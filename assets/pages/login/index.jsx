import React, { useState } from 'react';
import { injectIntl } from 'react-intl';
import { Button, Input, message } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import LangDropdown from 'components/LangDropdown';
import loginApi from 'api/login';
import authUtils from 'utils/authUtils';
import logo from 'public/imgs/logo.png';
import './index.less';

const Login = () => {
  const [username, setUsername] = useState('');
  const [pwd, setPwd] = useState('');

  const handleSubmit = () => {
    if (!username || !pwd) {
      message.warning('用户名或密码不能为空');
      return false;
    }

    const params = { username, pwd };

    //测试使用
    authUtils.testLogin(params);

    /* loginApi.login(params).then(res => {
      if (res && res.data.data) {
        authUtils.login(res.data.data);
      }
    }) */
  };

  return (
    <div className="login-component">
      <div className="logoName">
        <img width="50" src={logo} alt="" />
        <span>xxxx系统</span>
      </div>
      <div className="login">
        <span className="loginTitle">欢迎登录</span>
        <Input.Group>
          <Input
            size="large"
            prefix={<UserOutlined style={{ fontSize: '20px', color: '#9F9F9F' }} />}
            type="text"
            onChange={(e) => {
              setUsername(e.target.value);
            }}
            placeholder="请输入用户名"
            value={username}
            style={{ marginBottom: '20px' }}
            onPressEnter={handleSubmit}
          />
          <Input.Password
            size="large"
            prefix={<LockOutlined style={{ fontSize: '20px', color: '#9F9F9F' }} />}
            type="password"
            onChange={(e) => {
              setPwd(e.target.value);
            }}
            placeholder="请输入密码"
            value={pwd}
            onPressEnter={handleSubmit}
          />
        </Input.Group>
        <Button type="primary" className="submit" onClick={handleSubmit}>
          登录
        </Button>
      </div>
      <div className="lang">
        <LangDropdown />
      </div>
    </div>
  );
};
export default injectIntl(Login);
