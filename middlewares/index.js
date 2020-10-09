const moesif = require('moesif-nodejs');

module.exports = strapi => {
  const moesifMiddleware = moesif({
    applicationId: strapi.config.middleware.settings.moesif.appid,
  
    // Optional hook to link API calls to users
    identifyUser: function (req, res) {
      return req.user ? req.user.id : undefined;
    },
  });

  return {
    // can also be async
    initialize() {
      strapi.app.use(moesifMiddleware);;
    },
  };
};
