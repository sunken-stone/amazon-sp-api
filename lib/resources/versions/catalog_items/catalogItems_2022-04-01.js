const utils = require('../../../utils');

module.exports = {
  '2022-04-01':{
    searchCatalogItems:(req_params) => {
      return Object.assign(req_params, {
        method:'GET',
        api_path:'/catalog/2022-04-01/items',
        restore_rate:0.5
      });
    },
    getCatalogItem:(req_params) => {
    	req_params = utils.checkAndEncodeParams(req_params, {
    	  path:{
          asin:{
            type:'string'
          }
        }
  	  });
      return Object.assign(req_params, {
        method:'GET',
        api_path:'/catalog/2022-04-01/items/' + req_params.path.asin,
        restore_rate:0.5
      });
    }
  }
};