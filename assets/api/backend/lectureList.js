import service from 'utils/service';
const lectureListApi = {
  addOrUpdate: (isAddHandle, params) => {
    let apiUrl = isAddHandle ? '/lectureList/add' : '/lectureList/update';
    return service.post(apiUrl, params);
  },
  delete: (params) => {
    return service.post('/lectureList/delete', params)
  },
  detail: (params) => {
    return service.post('/lectureList/detail', params)
  },
  list: (params) => {
    return service.post('/lectureList/list', params)
  },

}
export default lectureListApi;
