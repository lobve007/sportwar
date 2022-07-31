const {createProxyMiddleware} = require('http-proxy-middleware');
module.exports = function(app) {
  app.use(createProxyMiddleware('/user', 
    {
        "target": "http://101.43.206.210:8024/",
        "changeOrigin": true,
    }))
}
