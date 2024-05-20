const { dependencies } = require('./package.json');

module.exports = {
  name: 'recent_app',
  exposes: {
    "./recent_app": "./src/App.js",
  },
  remotes: {
    remoteGallery: 'gallery_app@http://localhost:3002/remoteEntry.js',
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
