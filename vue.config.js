module.exports = {
    devServer: {
        proxy: {
            "/ssypzmd": {
                target: "http://127.0.0.1:8082/IDEASSM",
                changeOrigin: true,
                ws: true,
                pathRewrite: {
                    "^/ssypzmd": ""
                },
                cookieDomainRewrite: {
                    "*": "127.0.0.1"
                }
            },
        },
    }
}