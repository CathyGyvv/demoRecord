
const download = (res) => {
    let str = res.headers['content-disposition'];
    let index = str.indexOf('=');
    let eleLink = document.createElement('a');
    eleLink.download = str.slice(index + 1);
    eleLink.style.display = 'none';
    eleLink.setAttribute('href', URL.createObjectURL(res.data));
    // 触发点击
    document.body.appendChild(eleLink);
    eleLink.click();
    // 然后移除
    document.body.removeChild(eleLink);
  };
  export default download;
  