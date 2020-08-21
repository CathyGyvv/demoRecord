import React from 'react';
import { Result, Button } from 'antd';
import routerPath from 'router/routerPath';
const ServerError = () => {
  const handleClick = () => {
    window.location.href = routerPath.app.root;
  }
  return (
    <Result
      status="500"
      title="500"
      subTitle="Sorry, the server is wrong."
      extra={<Button type="primary" onClick={handleClick}>Back Home</Button>}
    />
  )
}
export default ServerError;
