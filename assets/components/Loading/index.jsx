import React from 'react';

import { Spin } from 'antd';

import './index.less';

const Loading = () => {
  return (
    <div id="loading-component" className="loading-component">
      <Spin size="large" />
    </div>
  )
}
export default Loading;
