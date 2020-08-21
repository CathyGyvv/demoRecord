import React from 'react';
import 'public/css/defaultTable.less';
import Echart from 'components/Echart';
import { Input, Table } from 'antd';
import options from './wordCloud';
import HookDemo from './HookDemo';
import Graph from './Graph';
import DP from './DP';
import Word from './Word';
import UpLoad from './Upload';
import Map from './Map';
import Context from './Context';
import Context2 from './context2';
import RefDom from './RefDom';
import HTML5 from './HTML5';
import CSStest from './CSStest';
import moment from 'moment';
import First from './算法';
import GridTest from './GridTest';
import TableTest from './Table';
import FontFamily from './FontFamily';
class Example extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };
  }

  componentDidMount() {
    const data = [3, 4, 5, 2, 443, 543];
    // console.log('type', this.checkedType(data));
    this.test();
    var time = moment(1581436800000).format('YYYY-MM-DD HH:mm:ss');
    console.log(time);
    var resNum = moment('2020-02-12', 'YYYY-MM-DD').valueOf();
    console.log(resNum);
  }

  checkedType(target) {
    return Object.prototype.toString.call(target).slice(8, -1); // -1是指最后一个字符串
  }

  test = () => {
    var b = { index: 0 };
    for (b.index; b.index < 10; b.index++) {
      var i = b.index;
      (function(i) {
        // 自执行函数
        setTimeout(function() {
          console.log(i);
        }, 100 * i);
      })(i);
    }
  };

  handleChange = (e) => {
    console.log('e', e);
    this.setState({
      value: e.target.value
    });
  };

  render() {
    const { value } = this.state;
    const dataSource = [
      {
        key: '1',
        name: '胡彦斌',
        age: 32,
        address: '西湖区湖底公园1号'
      },
      {
        key: '2',
        name: '胡彦祖',
        age: 42,
        address: '西湖区湖底公园1号'
      }
    ];
    const columns = [
      {
        title: '姓名',
        dataIndex: 'name',
        key: 'name'
      },
      {
        title: '年龄',
        dataIndex: 'age',
        key: 'age'
      },
      {
        title: '住址',
        dataIndex: 'address',
        key: 'address'
      }
    ];
    const rowSelection = {
      onChange: (selectedRowKeys, selectedRows) => {
        console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
      },
      getCheckboxProps: (record) => (
        {
          disabled: record.name === 'Disabled User', // Column configuration not to be checked
          name: record.name
        },
        console.log('record', record)
      )
    };
    return (
      <div>
        gfdgfd
        {/* <div className="mainPage" style={{ width: '100%', display: 'flex' }}>
          <div style={{ width: '20%' }}>
            <Echart chartId="chartId" height="400px" options={options} width="400px" />
            <Input value={value} onChange={(e) => this.handleChange(e)} />
          </div>

          <div style={{ width: '80%' }}>
            <Table rowSelection={rowSelection} dataSource={dataSource} columns={columns} />
          </div>
        </div>
        <HookDemo /> */}
        {/* <Graph />
        <DP />
        <Word />
        <UpLoad /> */}
        {/* <Map /> */}
        {/* <Context /> */}
        {/* <Context2 />
        {/* <RefDom /> */}
        {/* <HTML5 /> */}
        {/* <CSStest />
        <FontFamily /> */}
        {/* <First /> */}
        {/* <GridTest /> */}
        <TableTest />
      </div>
    );
  }
}
export default Example;
