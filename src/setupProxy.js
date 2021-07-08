const proxy = require('http-proxy-middleware')
module.exports = function (app) {
  app.use(
    '/api',
    proxy({
      target: 'https://carbonfootprintapinodejs.herokuapp.com',
      //https://carbonfootprintapinodejs.herokuapp.com
      //http://localhost:5000
      changeOrigin: true,
    }),
  )
}
