"use strict";

const moesifMiddleware = require("./middlewares/moesif");

module.exports = async ({ strapi }) => {
  moesifMiddleware({ strapi });
};
