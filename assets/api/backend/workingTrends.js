import service from 'utils/service';
const workingTrendsApi = {
  addOrUpdate: (isAddHandle, params) => {
    let apiUrl = isAddHandle ? '/workingTrends/add' : '/workingTrends/update';
    return service.post(apiUrl, params);
  },
  delete: (params) => {
    return service.post('/workingTrends/delete', params)
  },
  detail: (params) => {
    return service.post('/workingTrends/detail', params)
  },
  list: (params) => {
    return service.post('/workingTrends/list', params)
  },

}
export default workingTrendsApi;
