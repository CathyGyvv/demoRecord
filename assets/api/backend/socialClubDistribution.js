import service from 'utils/service';
const socialClubDistributionApi = {
  addOrUpdate: (isAddHandle, params) => {
    let apiUrl = isAddHandle ? '/socialClubDistribution/add' : '/socialClubDistribution/update';
    return service.post(apiUrl, params);
  },
  delete: (params) => {
    return service.post('/socialClubDistribution/delete', params)
  },
  detail: (params) => {
    return service.post('/socialClubDistribution/detail', params)
  },
  list: (params) => {
    return service.post('/socialClubDistribution/list', params)
  },

}
export default socialClubDistributionApi;
