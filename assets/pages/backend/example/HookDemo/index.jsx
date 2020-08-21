import React, { useEffect, useState } from 'react';
import { Select } from 'antd';

const HookDemo = () => {
  const [data, setData] = useState([1, 2, 4]);
  const [children, setChildren] = useState([]);
  useEffect(() => {
    setData({
      a: 1,
      b: 2
    });
    console.log('data', data);
    const childrenArray = [];
    for (let i = 10; i < 36; i++) {
      childrenArray.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
      setChildren(childrenArray);
    }
  }, []);
  console.log('datanew', data);
  const { Option } = Select;

  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };
  console.log('children', children);
  return (
    <div className="test">
      {/* <Select
        allowClear={true}
        mode="tags"
        style={{ width: '100%' }}
        placeholder="Tags Mode"
        onChange={handleChange}
      >
        {children}
      </Select> */}
    </div>
  );
};
export default HookDemo;
