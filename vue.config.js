module.exports = {
  devServer: {
    proxy: {
      "/sushe": {
        target: "http://192.168.58.49:8082/IDEASSM/",
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          "^/sushe": ""
        },
        cookieDomainRewrite: {
          "*": "127.0.0.1"
        }
      }
    },
  }
}