import service from 'utils/service';
const mainBaseDistributionApi = {
  addOrUpdate: (isAddHandle, params) => {
    let apiUrl = isAddHandle ? '/mainBaseDistribution/add' : '/mainBaseDistribution/update';
    return service.post(apiUrl, params);
  },
  delete: (params) => {
    return service.post('/mainBaseDistribution/delete', params)
  },
  detail: (params) => {
    return service.post('/mainBaseDistribution/detail', params)
  },
  list: (params) => {
    return service.post('/mainBaseDistribution/list', params)
  },

}
export default mainBaseDistributionApi;
