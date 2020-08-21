import React from 'react';
import { Result, Button } from 'antd';
import routerPath from 'router/routerPath';
const NoAccess = () => {
  const handleClick = () => {
    window.location.href = routerPath.app.root;
  };
  return (
    <Result
      status="403"
      title="403"
      subTitle="Sorry, you are not authorized to access this page."
      extra={
        <Button type="primary" onClick={handleClick}>
          Back Home
        </Button>
      }
    />
  );
};
export default NoAccess;
