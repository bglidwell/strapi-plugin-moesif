# Strapi plugin moesif

Plugin to add Moesif API Analytics and Monitoring to Strapi!
https://www.moesif.com/

## Installation
- Install the plugin
```
npm install strapi-plugin-moesif
```
- Add the following to ./middlewares.js
```
settings: {
  moesif: {
    enabled: true,
    appid: env('MOESIF_APPLICATION_ID', '')
  }
}
```
- Add MOESIF_APPLICATION_ID to your environment variables

## Heroku
If using Heroku, simply install the Moesif application as an add on to your server, the MOESIF_APPLICATION_ID veriable will be automatically created and managed by Heroku. 

