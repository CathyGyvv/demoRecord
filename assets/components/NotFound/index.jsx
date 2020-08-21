import React from 'react';
import { Result, Button } from 'antd';
import routerPath from 'router/routerPath';
const NotFound = () => {
  const handleClick = () => {
    window.location.href = routerPath.app.root;
  };
  return (
    <Result
      status="404"
      title="404"
      subTitle="Sorry, the page you visited does not exist."
      extra={
        <Button type="primary" onClick={handleClick}>
          Back Home
        </Button>
      }
    />
  );
};
export default NotFound;
