import React from 'react';
import { withRouter } from 'react-router-dom';
import { FormattedMessage, injectIntl } from 'react-intl';
import { inject, observer } from 'mobx-react';
import { Avatar, Dropdown, Menu, Modal, Input, Form, message } from 'antd';
import { UserOutlined, DownOutlined } from '@ant-design/icons';
import cx from 'classnames';
import authUtils from 'utils/authUtils';
import './index.less';
import logo from 'public/imgs/logo.png';
import loginApi from 'api/login';

@inject('Breadcrumb', 'UI')
@observer
class Header extends React.Component {
  constructor(props) {
    super(props);
    this.currentModuleTitle = {};
    this.state = {
      current: this.props.location.pathname,
      visible: false
    };
  }

  handleLogout = (e) => {
    if (e.key === 'signout') {
      authUtils.logout();
    }
    if (e.key === 'update') {
      this.setState({ visible: true });
    }
  };

  handlePage = (e) => {
    const path = e.currentTarget.id;
    const title = e.currentTarget.getAttribute('name');
    this.props.UI.reset();
    this.props.Breadcrumb.setValue(0, { path, title });
    this.props.history.push(path);
    this.setState({ current: path });
  };

  handleIndex = (e) => {
    const currentRoute = this.props.location.pathname;
    if (currentRoute !== e.target.id) {
      window.location.href = e.target.id;
    }
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.formRef.current.validateFields().then((values) => {
      const { oldPassword, newPassword } = values;
      loginApi.updatePassword({ oldPassword, newPassword }).then((res) => {
        const { data } = res.data;
        if (data === 1) {
          this.setState({ visible: false });
          Modal.success({
            title: '密码修改成功，请重新登录',
            okText: '确定',
            onOk: () => {
              authUtils.logout();
            }
          });
        } else if (data === -1) {
          message.error('原密码错误');
        } else {
          message.error('密码修改失败');
        }
      });
    });
  };

  componentDidMount() {
    this.props.Breadcrumb.setValue(0, this.currentModuleTitle);
  }

  render() {
    const { current, visible } = this.state;
    const { modules } = this.props;

    const userName = authUtils.getUserName();
    const homePath = authUtils.getHomePath();

    const loginMenu = (
      <Menu onClick={this.handleLogout}>
        {userName == null ? null : <Menu.Item key="update">修改密码</Menu.Item>}
        <Menu.Item key="signout">
          <FormattedMessage id={userName == null ? 'login.button' : 'head.logout'} />
        </Menu.Item>
      </Menu>
    );

    const isActive = (obj, index) => {
      let active = current.indexOf(obj.path) !== -1;
      if (!active && index === 0 && homePath === current) {
        active = true;
      }
      if (active) {
        this.currentModuleTitle = { path: obj.path, title: obj.title };
      }
      return active;
    };

    const loopNavMap = (data) =>
      data.map((item, index) => (
        <li
          key={item.path}
          id={item.path}
          name={item.title}
          className={cx({ active: isActive(item, index) })}
          onClick={this.handlePage}
        >
          {item.title}
        </li>
      ));

    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 6 }
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 18 }
      }
    };

    return (
      <div className="header-component">
        <div className="header-left">
          <img src={logo} alt="" width="30px" height="32px" />
          <span id={homePath} onClick={this.handleIndex}>
            xxxx项目/平台
          </span>
          <ul>{modules && modules.length > 1 && loopNavMap(modules)}</ul>
        </div>
        <div className="header-right">
          <Dropdown overlay={loginMenu} trigger={['click']}>
            <span>
              <Avatar
                size="small"
                style={{ color: '#fff', backgroundColor: '#1C1D22' }}
                icon={<UserOutlined />}
              />
              <span style={{ color: '#fff', fontSize: '14px', margin: '0 3px' }}>
                {userName || <FormattedMessage id="head.nologin" />}
              </span>
              <DownOutlined />
            </span>
          </Dropdown>
        </div>
        <Modal
          title="修改密码"
          width={400}
          visible={visible}
          onCancel={() => {
            this.setState({ visible: false });
          }}
          onOk={this.handleSubmit}
          className="header-modal"
        >
          <Form {...formItemLayout} ref={this.formRef}>
            <Form.Item
              label="旧密码"
              name="oldPassword"
              rules={[{ required: true, message: '请输入旧密码!' }]}
            >
              <Input.Password />
            </Form.Item>
            <Form.Item
              name="newPassword"
              label="新密码"
              rules={[
                {
                  required: true,
                  min: 6,
                  message: '密码不能少于6个字符'
                }
              ]}
              hasFeedback
            >
              <Input.Password />
            </Form.Item>
            <Form.Item
              name="confirm"
              label="确认新密码"
              dependencies={['newPassword']}
              hasFeedback
              rules={[
                {
                  required: true,
                  message: '请确认新密码!'
                },
                ({ getFieldValue }) => ({
                  validator(rule, value) {
                    if (!value || getFieldValue('newPassword') === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject('两次密码不一致!');
                  }
                })
              ]}
            >
              <Input.Password />
            </Form.Item>
          </Form>
        </Modal>
      </div>
    );
  }
}
export default injectIntl(withRouter(Header));
