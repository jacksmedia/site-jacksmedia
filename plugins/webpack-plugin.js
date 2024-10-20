const path = require('path');

module.exports = function (context, options) {
  return {
    name: 'custom-webpack-plugin',
    configureWebpack(config, isServer) {
      return {
        resolve: {
          alias: {
            'pdfjs-dist/build/pdf.worker.js': path.resolve(__dirname, '../node_modules/pdfjs-dist/build/pdf.worker.min.js'),
          },
        },
      };
    },
  };
};
