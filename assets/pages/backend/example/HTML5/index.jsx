import React from 'react';

const htmlTest = (props) => {
  return (
    <section>
      <header>头部</header>
      <aside>侧边</aside>
      <footer>底部</footer>
      <time>时间</time>
      <progress>进程</progress>
      <mark>记号</mark>
      <nav>导航</nav>
      <dialog>
        <a href="index.asp">Home</a>
        <a href="html5_meter.asp">Previous</a>
        <a href="html5_noscript.asp">Next</a>
      </dialog>
      <meter max="100" min="10" value="30">
        度量
      </meter>
      <figure>流内容</figure>
    </section>
  );
};
export default htmlTest;
