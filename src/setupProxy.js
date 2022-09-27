const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = function (app) {
  app.use(
    createProxyMiddleware('/api-sendemail', {
      target: 'https://api.sendgrid.com/',
      pathRewrite: {
        '^/api-sendemail': ''
      },
      changeOrigin: true,
      secure: false
    })
  )
}
