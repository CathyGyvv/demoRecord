const openFile = (res) => {
  var binaryData = [];
  binaryData.push(res.data);
  var url = window.URL.createObjectURL(new Blob(binaryData, { type: 'application/pdf' }));
  let eleLink = document.createElement('a');
  eleLink.setAttribute('href', url);
  eleLink.target = '_blank';
  document.body.appendChild(eleLink);
  eleLink.click();
  // 然后移除
  document.body.removeChild(eleLink);
};
export default openFile;
