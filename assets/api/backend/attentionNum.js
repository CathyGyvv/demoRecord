import service from 'utils/service';
const attentionNumApi = {
  addOrUpdate: (isAddHandle, params) => {
    let apiUrl = isAddHandle ? '/attentionNum/add' : '/attentionNum/update';
    return service.post(apiUrl, params);
  },
  delete: (params) => {
    return service.post('/attentionNum/delete', params)
  },
  detail: (params) => {
    return service.post('/attentionNum/detail', params)
  },
  list: (params) => {
    return service.post('/attentionNum/list', params)
  },

}
export default attentionNumApi;
