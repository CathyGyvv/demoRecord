import service from 'utils/service';
const lectureVideoApi = {
  addOrUpdate: (isAddHandle, params) => {
    let apiUrl = isAddHandle ? '/lectureVideo/add' : '/lectureVideo/update';
    return service.post(apiUrl, params);
  },
  delete: (params) => {
    return service.post('/lectureVideo/delete', params)
  },
  detail: (params) => {
    return service.post('/lectureVideo/detail', params)
  },
  list: (params) => {
    return service.post('/lectureVideo/list', params)
  },

}
export default lectureVideoApi;
