import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/', component: '@/pages/index' },
  ],
  fastRefresh: {},
  proxy: {
    '/api/v1': {
      // target: 'https://od-api.oxforddictionaries.com',
      target: 'http://localhost:9999',
      changeOrigin: true
    }
  },
});
