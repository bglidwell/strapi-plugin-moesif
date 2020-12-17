# Strapi plugin moesif

Plugin to add [Moesif API Analytics](https://www.moesif.com/) and Monitoring to [Strapi](https://strapi.io/)!

## Installation

1. Install the plugin
  
```bash
npm install --save strapi-plugin-moesif
```

2. Add a Moesif to your middleware file `./config/middleware.js`
  
```javascript
module.exports = ({env}) => ({
    settings: {
      load: {
        before: ["moesif"],
        order: ["moesif"],
      },
      moesif: {
        enabled: true,
        debug: false,
        applicationId: env('MOESIF_APPLICATION_ID', ''),
        identifyUser: function (req, res) {
          if (req.state && req.state.user) {
            return String(req.state.user.id);
          }
          return undefined;
        },
        skip: function (req, res) {
            // don't log non JSON types
            return res.headers && !res.headers['Content-Type'].includes('application'); 
        },
        disableBatching: false,
        logBody: true,
        debug: false
      }
    }
  });
```

Add MOESIF_APPLICATION_ID to your environment variables
Your Moesif Application Id can be found in the [_Moesif Portal_](https://www.moesif.com/).
After signing up for a Moesif account, your Moesif Application Id will be displayed during the onboarding steps. 

3. Run Strapi

```bash
npm run develop
```

Make a few API calls to your resources like so:

```bash
curl `http://localhost:1337`
```

## Heroku
If using Heroku, simply install the Moesif application as an add-on. The MOESIF_APPLICATION_ID environment variable will be automatically created and managed by Heroku. 

## Configuration options

Because this plugin uses `moesif-nodejs` under the hood, all of the [configuration options for moesif-nodejs](https://www.moesif.com/docs/server-integration/nodejs/#configuration-options) are supported by this plugin also. 

### identifyUser

To track Strapi users, we recommend setting the `identifyUser` with the following code:

```javascript
identifyUser: function (req, res) {
  if (req.state && req.state.user) {
    return String(req.state.user.id);
  }
  return undefined;
}
```