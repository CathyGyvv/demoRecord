import service from 'utils/service';
const loginApi = {
  //登录
  login: (params) => {
    return service.post('/login', params);
  },

  logout: () => {
    return service.get('/logout');
  },

  updatePassword: (params) => {
    return service.post('/updatePassword', params);
  },

  //功能权限管理
  getModuleRoles: (params) => {
    return service.post('/getModuleRoles', params);
  }
};
export default loginApi;
