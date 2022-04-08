// vue.config.js

/**
 * @type {import('@vue/cli-service').ProjectOptions}
 */
 module.exports = {
    // options...
    publicPath: process.env.NODE_ENV === 'production'
    ? '/vue-app/dist/'
    : '/'
  }