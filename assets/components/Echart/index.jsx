'use strict';

import React from 'react';
import { injectIntl /*, formatMessage*/ } from 'react-intl';

import echarts from 'echarts/lib/echarts';
import 'echarts/lib/chart/bar';
import 'echarts/lib/chart/radar';
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/legend';
import 'echarts/lib/component/title';

let uniqueId = Math.random();
// eslint-disable-next-line no-plusplus
const generateUniqueId = () => `rc-ec-${uniqueId++}`;

class ChartLineAnalysis extends React.Component {
  constructor(props) {
    super(props);
    this.chart = null;
    this.chartId = generateUniqueId();
  }

  componentDidMount() {
    this.initChart(this.props);
  }

  componentWillReceiveProps(newProps) {
    this.chart.clear();
    this.chart.setOption(newProps.options);
  }

  componentWillUpdate() {
    this.chart.clear();
  }

  shouldComponentUpdate() {
    return false;
  }

  // componentWillUnmount() {
  //   this.chart.dispose()
  //   this.chart = null
  //   this.chartId = ''
  // }

  initChart() {
    const chartDom = document.getElementById(`${this.chartId}`);
    //用于使chart自适应高度和宽度,通过窗体高宽计算容器高宽
    const resizeChart = function() {
      chartDom.style.height = `${(window.innerHeight - 470) / 2}px`;
    };
    //设置容器高宽
    resizeChart();
    const chart = echarts.init(chartDom);
    chart.setOption(this.props.options);
    if (this.props.options) {
      // tools.loopShowTooltip(chart, this.props.options, { loopSeries: true }); // 使用本插件
    }
    this.chart = chart;
    window.addEventListener(
      'resize',
      () => {
        resizeChart();
        chart.resize();
      },
      false
    );
  }

  render() {
    return <div id={this.chartId} />;
  }
}
export default injectIntl(ChartLineAnalysis);
