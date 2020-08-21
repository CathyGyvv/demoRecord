import React, { useEffect } from 'react';

// 写一个 mySetInterVal(fn, a, b),每次间隔 a,a+b,a+2b 的时间，然后写一个 myClear，停止上面的 mySetInterVal
const Algorithm = (props) => {
  var mySetInterVal = (fn, a, b) => {
    let time = 0;
    var handle = -1;
    var start = () => {
      handle = setTimeout(() => {
        fn();
        time++;
        start();
        console.log(a + time * b);
      }, a + time * b);
    };
    var stop = () => {
      clearTimeout(handle);
      time = 0;
    };
  };
  useEffect(() => {
    var test = new mySetInterVal(
      () => {
        console.log('123');
      },
      1000,
      2000
    );
    console.log('test', test);
    test.start();
    test.stop();
  }, []);

  return <div></div>;
};
export default Algorithm;
