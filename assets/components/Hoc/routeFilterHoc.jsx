import routerPath from 'router/routerPath';

export default (WrappedComponent) => {
  console.info('首次访问路由拦截是否已登录');
  return class extends WrappedComponent {
    render() {
      const pathname = window.location.pathname;

      console.info('==路由拦截current==' + pathname)
      if (pathname != routerPath.app.login && !window.sessionStorage.getItem('tokenId')) {
        //window.location.pathname = routerPath.app.login;
      }
      return super.render();
    }
  }
}
