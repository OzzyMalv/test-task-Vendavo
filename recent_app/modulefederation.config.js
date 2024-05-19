const { dependencies } = require('./package.json');

module.exports = {
  name: 'recent_app',
  exposes: {
    "./recent_app": "./src/App.js",
  },
  filename: 'remoteEntry.js',
  shared: {
    ...dependencies,
    react: {
      singleton: true,
      requiredVersion: dependencies['react'],
    },
    'react-dom': {
      singleton: true,
      requiredVersion: dependencies['react-dom'],
    },
  },
};
