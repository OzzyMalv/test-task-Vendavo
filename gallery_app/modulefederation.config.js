const { dependencies } = require('./package.json');

module.exports = {
  name: 'gallery_app',
  exposes: {
    "./gallery_app": "./src/App.js",
    "./useAxios": "./src/hooks/useAxios.js",
    "./CustomCard": "./src/ui/CustomCard.jsx",
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
