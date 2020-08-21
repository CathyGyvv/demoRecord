import React, { useEffect, useState } from 'react';
import { Input } from 'antd';
import './index.less';

const CSStest = (props) => {
  const [inputValue, setInputValue] = useState(300);

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  useEffect(() => {}, inputValue);

  console.log('inputValue', inputValue);
  return (
    <div className="border">
      <Input value={inputValue} onChange={handleChange} />
      <div className="parent" style={{ height: inputValue }}>
        <div className="first"></div>
        <div className="second"></div>
        <div className="third"></div>
      </div>
    </div>
  );
};
export default CSStest;
