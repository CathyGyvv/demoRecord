import service from 'utils/service';
const projectResearchApi = {
  addOrUpdate: (isAddHandle, params) => {
    let apiUrl = isAddHandle ? '/projectResearch/add' : '/projectResearch/update';
    return service.post(apiUrl, params);
  },
  delete: (params) => {
    return service.post('/projectResearch/delete', params)
  },
  detail: (params) => {
    return service.post('/projectResearch/detail', params)
  },
  list: (params) => {
    return service.post('/projectResearch/list', params)
  },

}
export default projectResearchApi;
