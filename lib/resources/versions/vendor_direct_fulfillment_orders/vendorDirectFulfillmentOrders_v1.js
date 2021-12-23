const utils = require('../../../utils');

module.exports = {
  'v1':{
    getOrders:(req_params) => {
      return Object.assign(req_params, {
        method:'GET',
        api_path:'/vendor/directFulfillment/orders/v1/purchaseOrders',
        restore_rate:0.1
      });
    },
    getOrder:(req_params) => {
      utils.checkParams(req_params, {
        path:{
          purchaseOrderNumber:{
            type:'string'
          }
        }
      });
      return Object.assign(req_params, {
        method:'GET',
        api_path:'/vendor/directFulfillment/orders/v1/purchaseOrders/' + req_params.path.purchaseOrderNumber,
        restore_rate:0.1
      });
    },
    submitAcknowledgement:(req_params) => {
      return Object.assign(req_params, {
        method:'POST',
        api_path:'/vendor/directFulfillment/orders/v1/acknowledgements',
        restore_rate:0.1
      });
    }
  }
};