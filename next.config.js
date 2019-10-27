const { parsed: localEnv } = require('dotenv').config()
const webpack = require('webpack')

module.exports = {
  exportPathMap: function() {
    return {
      '/': { page: '/' }
    };
  }
};


module.exports = {
  webpack(config) {
    config.plugins.push(new webpack.EnvironmentPlugin(localEnv))

    return config
  }
}