const path = require('path')

module.exports = function override(config) {
  return {
    ...config,
    resolve: {
      ...config.resolve,
      alias: { '@': path.resolve(__dirname, 'src') },
    },
  }
}
