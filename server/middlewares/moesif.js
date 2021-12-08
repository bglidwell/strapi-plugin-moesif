"use strict";

const moesif = require("moesif-nodejs");

module.exports = ({ strapi }) => {
  const moesifMiddleware = moesif(strapi.config.middleware.settings.moesif);

  strapi.server.use(moesifMiddleware);
};
