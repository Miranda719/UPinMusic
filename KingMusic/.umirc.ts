import { defineConfig } from '@umijs/max';

export default defineConfig({
  antd: {},
  access: {},
  model: {},
  initialState: {},
  request: {
    dataField: '',
  },
  dva: {},
  routes: [
    {
      path: '/qinzhonjin', component: 'qinzhonjin', title: '歌曲详情'
    },
    { path: '/lanmin', component: 'lanmin', title: '搜索' },
    {
      path: '/',
      component: '@/layouts/index2',
      routes: [
        { path: '/', component: 'chenrenjun', title: '主页' },
        { path: '/xujiapeng', component: 'xujiapeng', title: '热门歌曲' },
        { path: '/chenqian', component: 'chenqian', title: '我的' },
      ]
    },
    { path: '/perDetail', component: 'perDetail', title: '推荐歌单详情页' },
    { path: '/songsDetail', component: 'songsDetail', title: '歌曲详情页' },
    { path: '/login', component: 'login', title: '登录' },
  ],
  npmClient: 'pnpm',
  // 代理配置
  proxy: {
    '/api': {
      'target': 'http://43.142.14.223:3000/',
      'changeOrigin': true,
      'pathRewrite': { '^/api': '' },
    }
  },
});

