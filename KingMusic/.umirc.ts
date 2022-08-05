import { defineConfig } from '@umijs/max';

export default defineConfig({
  antd: {},
  access: {},
  model: {},
  initialState: {},
  request: {
    dataField: '',
  },
  dva:{},
  routes: [
    {path:'/lanmin',component:'lanmin',title:'搜索'},
    {path:'/chenrenjun',component:'chenrenjun',title:'主页'},
    {path:'/chenqian',component:'chenqian',title:'我的'},
    {path:'/qinzhonjin',component:'qinzhonjin',title:'歌曲详情'},
    {path:'/xujiapeng',component:'xujiapeng',title:'热门歌曲'},
    { path: '/Likemusic', component: 'chenqian/Likemusic', title: '我的喜欢' },
    { path: '/Recentmusic', component: 'chenqian/Recentmusic', title: '最近播放' },
    { path: '/Gedan', component: 'chenqian/Gedan', title: '歌单' },
    { path: '/Singple', component: 'chenqian/Singple', title: '个人主页' },
  ],
  npmClient: 'pnpm',
    // 代理配置
  proxy: {
    '/api': {
      'target': 'http://43.142.14.223:3000/',
      'changeOrigin': true,
      'pathRewrite': { '^/api': ''},
    }
  },
});

