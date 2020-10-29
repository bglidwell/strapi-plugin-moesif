# Strapi plugin moesif

Plugin to add Moesif API Analytics and Monitoring to Strapi!
https://www.moesif.com/

## Installation
- Install the plugin
```
npm install strapi-plugin-moesif
```
- Add the following to ./config/middlewares.js
```
const hash = require('crypto-js/md5');
module.exports = ({env}) => ({
  settings: {
    moesif: {
      enabled: true,
      debug: false,
      applicationId: env('MOESIF_APPLICATION_ID', ''),
      identifyUser: function (req, res) {
        if (req.state && req.state.user) {
          return req.state.user.id;
        }
        return undefined;
      },
      getSessionToken: function (req, res) {
        // your code here, must return a string.
        return hash(req.headers['Authorization']).toString();
      },
      maskContent: function(event) {
        // remove any field that you don't want to be sent to Moesif.
        event.request.headers['Authorization'] = hash(event.request.headers['Authorization']).toString(); 
        return event;
      },
      disableBatching: false,
      logBody: true,
      callback: function (error, data) {
        console.log('Moesif error: ' + JSON.stringify(error));
      }
    }
  }
});
```
- Add MOESIF_APPLICATION_ID to your environment variables

## Heroku
If using Heroku, simply install the Moesif application as an add-on. The MOESIF_APPLICATION_ID environment variable will be automatically created and managed by Heroku. 

