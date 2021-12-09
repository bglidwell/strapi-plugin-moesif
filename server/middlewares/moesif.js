"use strict";

const moesif = require("moesif-nodejs");

module.exports = (options, { strapi }) => {
  const moesifConfig = strapi.plugin("strapi-plugin-moesif").config("moesif");
  if (!moesifConfig.applicationId || moesifConfig.applicationId === "") {
    strapi.log.error(
      "Unable to load moesif plugin: missing applicationId ENV variable"
    );
    return;
  }
  
  const moesifMiddleware = moesif(moesifConfig);

  return moesifMiddleware;
};
