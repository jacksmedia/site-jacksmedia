module.exports = function (context, options) {
  return {
    name: 'custom-webpack-plugin',
    configureWebpack(config, isServer) {
      return {
        module: {
          rules: [
            {
              test: /pdf\.worker(\.min)?\.js$/,
              use: { loader: 'file-loader', options: { name: '[name].[ext]' } }, // Bundles the worker correctly
            },
          ],
        },
      };
    },
  };
};
