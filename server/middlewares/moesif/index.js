const moesif = require('moesif-nodejs');

module.exports = strapi => {
  const moesifMiddleware = moesif(strapi.config.middleware.settings.moesif);

  return {
    // can also be async
    initialize() {
      strapi.app.use(moesifMiddleware);
    },
  };
};
