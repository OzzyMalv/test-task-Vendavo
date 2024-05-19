const { dependencies } = require('./package.json');

module.exports = {
  name: 'container',
  remotes: {
    remoteGallery: 'gallery_app@http://localhost:3002/remoteEntry.js',
    remoteRecent: 'recent_app@http://localhost:3003/remoteEntry.js',
  },
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
