import React from 'react';

import Content from 'components/Content';
import Example from 'bundle-loader?lazy&name=example!./example';

const pageComponents = [Example];

const Backend = () => {
  return <Content name="example" pageComponents={pageComponents} />;
};
export default Backend;
