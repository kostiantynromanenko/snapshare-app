const path = require(`path`);
const jestConfig = require('./jest.config.js');

module.exports = {
  webpack: {
    alias: {
      '@features': path.resolve(__dirname, 'src/features'),
      '@assets': path.resolve(__dirname, 'src/assets'),
    },
  },
  jest: {
    configure: jestConfig,
  },
};
