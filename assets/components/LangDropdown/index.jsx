import React from 'react';
import { Dropdown, Menu } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import langUtils from 'utils/langUtils';

const LangMenu = () => {
  const langArray = langUtils.getLangArray();
  let items = [];
  for (let i in langArray) {
    items.push(<Menu.Item key={langArray[i].lang}>{langArray[i].title}</Menu.Item>);
  }

  const handleLang = (e) => {
    langUtils.changeCurrentLang(e.key);
  };

  return <Menu onClick={handleLang}>{items}</Menu>;
};

const LangDropdown = () => {
  return (
    <Dropdown overlay={LangMenu} trigger={['click']}>
      <span>
        {langUtils.getLangTitle()}
        <DownOutlined />
      </span>
    </Dropdown>
  );
};

export default LangDropdown;
