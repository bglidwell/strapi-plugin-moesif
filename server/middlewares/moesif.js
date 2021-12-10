"use strict";

const moesif = require("moesif-nodejs");

module.exports = (options, { strapi }) => {
  const moesifConfig = strapi.plugin("strapi-plugin-moesif").config("moesif");
  if (!moesifConfig.applicationId || moesifConfig.applicationId === "") {
    strapi.log.error(
      "Unable to load moesif plugin: missing MOESIF_APPLICATION_ID environment variable"
    );
    return;
  }

  const moesifMiddleware = moesif(moesifConfig);

  return moesifMiddleware;
};
