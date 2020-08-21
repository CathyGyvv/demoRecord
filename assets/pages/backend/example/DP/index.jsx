import React from 'react';
import { SketchPicker } from 'react-color';
import './index.less';

const style = require('./index.less');

const DP = (props) => {
  return (
    <div className="content">
      <SketchPicker />
    </div>
  );
};
export default DP;
