"use strict";

const moesif = require("moesif-nodejs");

module.exports = (options, { strapi }) => {
  const moesifConfig = strapi.plugin("strapi-plugin-moesif").config("moesif");
  const moesifMiddleware = moesif(moesifConfig);

  return moesifMiddleware;
};
