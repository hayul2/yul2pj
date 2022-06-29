const target = "http://localhost:5000";

module.exports = {
  devServer: {
    port: 8080,
    proxy: {
      "^/api/": {
        target,
        changeOrigin: true,
      },
      "^/member/": {
        target,
        changeOrigin: true,
      },
      "^/upload/": {
        target,
        changeOrigin: true,
      },
      "^/download/": {
        target,
        changeOrigin: true,
      },
      "^/apimenu/": {
        target,
        changeOrigin: true,
      },
      "^/status/": {
        target,
        changeOrigin: true,
      },
      "^/static/": {
        target,
        changeOrigin: true,
      },

    },
  },
  lintOnSave: false,
  // publicPath: './',
};
