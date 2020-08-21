var nprogressUtils = (function() {
  var globalLoadingCnt = 0;
  return {
    start: function() {
      globalLoadingCnt += 1;
      NProgress.start();
    },

    done: function() {
      globalLoadingCnt -= 1;
      if (!globalLoadingCnt) {
        NProgress.done();
      }
    }
  };
})();
