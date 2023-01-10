// proxy를 여러개 연결하기 위해서 
// npm i http-proxy-middleware 을 한 후 아래 내용을 추가해서 연결한다
// * 이때  package.json에 들어간 proxy에 관한 정보는 지운다

const { createProxyMiddleware } = require('http-proxy-middleware');



module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://localhost:3000',
      changeOrigin: true,
    })
  );
  app.use(
    '/Test1123',
    createProxyMiddleware({
      target: 'http://localhost:8080',
      changeOrigin: true,
    })
  );
};