const utils = {
  getQueryString: (search, name) => {
    var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)');
    var r = search.substr(1).match(reg);
    if (r != null) {
      return decodeURI(r[2]);
    }
    return null;
  },

  isNullOrEmpty: (obj) => {
    if (!obj || obj.length == 0) {
      return true;
    }
    if (obj instanceof Object) {
      for (let k in obj) {
        if (obj[k]) {
          return false;
        }
      }
      return true;
    }
    return false;
  }
};
export default utils;
