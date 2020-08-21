import React from 'react';
import { withRouter } from 'react-router-dom';
import { observer, inject } from 'mobx-react';
import { Menu } from 'antd';
import { MenuUnfoldOutlined, MenuFoldOutlined, HomeOutlined } from '@ant-design/icons';
import './index.less';
import cx from 'classnames';

const { SubMenu } = Menu;
let currOpenKeys = [];

@inject('Breadcrumb', 'UI')
@observer
class LeftMenu extends React.Component {
  constructor(props) {
    super(props);
    this.menuData = this.props.data;
    this.crumbValues = [];
  }

  componentDidMount() {
    this.props.Breadcrumb.setValue(1, this.crumbValues);
  }

  toggleCollapsed = () => {
    this.props.UI.toggleCollapsed();
  };

  handleClick = (menuItem) => {
    const { keyPath } = menuItem;
    this.props.history.push(keyPath[0]);
  };

  setOpenKeys = (keys) => {
    currOpenKeys = keys;
  };

  getActiveMenu = (menuData) => {
    const menuProps = { openMenuArr: [], selectMenuArr: [] };

    const currentPath = window.location.pathname + '/';
    let menuDataItem = menuData.find((item) => {
      return currentPath.indexOf(item.path + '/') !== -1;
    });

    if (!menuDataItem) {
      [menuDataItem] = menuData;
    }
    const { path, title } = menuDataItem;
    if (menuDataItem.children) {
      menuProps.openMenuArr.push({ path, title });
      const subMenuProps = this.getActiveMenu(menuDataItem.children);
      menuProps.openMenuArr = menuProps.openMenuArr.concat(subMenuProps.openMenuArr);
      if (subMenuProps.selectMenuArr.length > 0) {
        menuProps.selectMenuArr = menuProps.selectMenuArr.concat(subMenuProps.selectMenuArr);
      } else {
        menuProps.selectMenuArr.push({ path, title });
      }
    } else {
      menuProps.selectMenuArr.push({ path, title });
    }
    return menuProps;
  };

  renderMenu = (value) => {
    const menuArray = [];
    const { path, title, children } = value;
    if (children && children.length > 0) {
      const subChildren = children.map(this.renderMenu);
      menuArray.push(
        <SubMenu
          key={path}
          title={
            <span>
              <HomeOutlined />
              <span>{title}</span>
            </span>
          }
        >
          {subChildren}
        </SubMenu>
      );
    } else {
      menuArray.push(
        <Menu.Item key={path}>
          <HomeOutlined />
          <span>{title}</span>
        </Menu.Item>
      );
    }
    return menuArray;
  };

  render() {
    const { collapsed } = this.props.UI;
    const { openMenuArr, selectMenuArr } = this.getActiveMenu(this.menuData);
    this.crumbValues = openMenuArr.concat(selectMenuArr);
    const openKeyArr = openMenuArr.map((v) => v.path);
    const selectKeyArr = selectMenuArr.map((v) => v.path);

    if (currOpenKeys.length === 0 && openKeyArr.length > 0) {
      this.setOpenKeys(openKeyArr);
    }

    return (
      <div
        className={cx({
          'left-menu': true,
          'left-menu-collapsed': collapsed === true
        })}
      >
        <div className="open-menu" onClick={this.toggleCollapsed}>
          {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined)}
        </div>
        <Menu
          defaultSelectedKeys={selectKeyArr}
          defaultOpenKeys={currOpenKeys}
          mode="inline"
          theme="dark"
          inlineCollapsed={collapsed}
          inlineIndent={15}
          onOpenChange={this.setOpenKeys}
          onClick={this.handleClick}
        >
          {this.menuData && this.menuData.map(this.renderMenu)}
        </Menu>
      </div>
    );
  }
}
export default withRouter(LeftMenu);
