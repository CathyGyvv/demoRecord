import service from 'utils/service';
const socialBaseDistributionApi = {
  addOrUpdate: (isAddHandle, params) => {
    let apiUrl = isAddHandle ? '/socialBaseDistribution/add' : '/socialBaseDistribution/update';
    return service.post(apiUrl, params);
  },
  delete: (params) => {
    return service.post('/socialBaseDistribution/delete', params)
  },
  detail: (params) => {
    return service.post('/socialBaseDistribution/detail', params)
  },
  list: (params) => {
    return service.post('/socialBaseDistribution/list', params)
  },

}
export default socialBaseDistributionApi;
