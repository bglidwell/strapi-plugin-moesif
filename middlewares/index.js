const moesif = require('moesif-nodejs');

console.log('BACK IN CONSOLE LOG BABY')
console.log(strapi.config.middleware.settings.moesif)

const moesifMiddleware = moesif({
  applicationId: strapi.config.middleware.settings.moesif ?
    strapi.config.middleware.settings.moesif.appid : '',

  // Optional hook to link API calls to users
  identifyUser: function (req, res) {
    return req.user ? req.user.id : undefined;
  },
});

module.exports = strapi => {
  return {
    // can also be async
    initialize() {
      strapi.app.use(moesifMiddleware);;
    },
  };
};
