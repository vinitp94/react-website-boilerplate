let callApi = (method, route, payload) => {
  let apiUrl = '';

  return $.ajax({
    method: method,
    url: apiUrl + route,
    data: payload
  });
};

let Utility = {
  buildAssetUrl: (path) => {
    return window.location.origin + '/src/assets/' + path;
  },
  getBaseUrl: () => {
    return window.location.origin;
  }
};

export default Utility;
