import React from 'react';
import { Upload } from 'antd';
import './index.less';

const UpLoad = (props) => {
  const fileList = [
    {
      uid: '-1',
      name: 'image.png',
      status: 'done',
      url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'
    }
  ];
  return (
    <div className="upload">
      <Upload
        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
        listType="picture-card"
        fileList={fileList}
        // onPreview={this.handlePreview}
        // onChange={this.handleChange}
      />
    </div>
  );
};

export default UpLoad;
