import React, { Component } from 'react';
import './index.less';
class Map extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    var imageLayer = new window.AMap.ImageLayer({
      url: 'http://amappc.cn-hangzhou.oss-pub.aliyun-inc.com/lbs/static/img/dongwuyuan.jpg',
      bounds: new window.AMap.Bounds([116.327911, 39.939229], [116.342659, 39.946275]),
      zooms: [15, 18]
    });
    var map = new window.AMap.Map('container', {
      resizeEnable: true,
      center: [116.33719, 39.942384],
      zooms: [12, 18],
      layers: [new window.AMap.TileLayer(), imageLayer]
    });
  }

  render() {
    return <div id="container"></div>;
  }
}

export default Map;
