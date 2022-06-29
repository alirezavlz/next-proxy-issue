import { createProxyMiddleware } from 'http-proxy-middleware';

const proxy = createProxyMiddleware({
  logLevel: 'debug',
  target: 'http://localhost:9090',
  changeOrigin: true,
  autoRewrite: true,
  pathRewrite: {
    '^/api/json': ''
  }
});

export default proxy;
