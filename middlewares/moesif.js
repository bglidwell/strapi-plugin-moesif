"use strict";

const moesif = require("moesif-nodejs");

module.exports = (options, { strapi }) => {
  const moesifMiddleware = moesif(options);

  return moesifMiddleware;
};
