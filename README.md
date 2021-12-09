# Strapi plugin moesif

## **WARNING** (Breaking Changes):  ^2.0.0 only supports Strapi v4 and above. For Strapi v3 support, use ^1.0.5

Plugin to add [Moesif API Analytics](https://www.moesif.com/) and Monitoring to [Strapi](https://strapi.io/)!

## Installation

1. Install the plugin
  
```bash
npm install --save strapi-plugin-moesif
```
2. Enable the plugin `./config/plugins.js`
```javascript
module.exports = {
  'strapi-plugin-moesif': {
    enabled: true,
    config: {
      moesif: {
        //custom config passed to moesif middleware goes here
      }
    },
  },
}
```

3. Add Moesif to your middleware array `./config/middleware.js`
  
```javascript
module.exports = [
  'strapi::errors',
  'strapi::security',
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::logger',
  'strapi::query',
  'strapi::body',
  'strapi::favicon',
  'strapi::public',
  'plugin::strapi-plugin-moesif.moesif'
];
```

Add MOESIF_APPLICATION_ID to your environment variables
Your Moesif Application Id can be found in the [_Moesif Portal_](https://www.moesif.com/).
After signing up for a Moesif account, your Moesif Application Id will be displayed during the onboarding steps. 

3. Run Strapi

npm
```bash
npm run develop
```

yarn 
```bash
yarn develop
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

To track Strapi users, we set the `identifyUser` function by default:

```javascript
identifyUser: function (req, res) {
  if (req.state && req.state.user) {
    return String(req.state.user.id);
  }
  return undefined;
}
```

## Credits

This plugin was originally created by [Bobby Glidwell](https://github.com/bglidwell/strapi-plugin-moesif)