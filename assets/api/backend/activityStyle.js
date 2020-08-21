import service from 'utils/service';
const activityStyleApi = {
  addOrUpdate: (isAddHandle, params) => {
    let apiUrl = isAddHandle ? '/activityStyle/add' : '/activityStyle/update';
    return service.post(apiUrl, params);
  },
  delete: (params) => {
    return service.post('/activityStyle/delete', params)
  },
  detail: (params) => {
    return service.post('/activityStyle/detail', params)
  },
  list: (params) => {
    return service.post('/activityStyle/list', params)
  },

}
export default activityStyleApi;
