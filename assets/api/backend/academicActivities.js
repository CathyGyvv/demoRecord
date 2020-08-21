import service from 'utils/service';
const academicActivitiesApi = {
  addOrUpdate: (isAddHandle, params) => {
    let apiUrl = isAddHandle ? '/academicActivities/add' : '/academicActivities/update';
    return service.post(apiUrl, params);
  },
  delete: (params) => {
    return service.post('/academicActivities/delete', params)
  },
  detail: (params) => {
    return service.post('/academicActivities/detail', params)
  },
  list: (params) => {
    return service.post('/academicActivities/list', params)
  },

}
export default academicActivitiesApi;
