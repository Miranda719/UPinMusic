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
    {
      path: '/lanmin', component: 'lanmin', title: '搜索',
      routes: [
        { path: 'type1', component: 'Type1', title: '单曲' },
        { path: 'type1018', component: 'Type1018', title: '综合' },
        { path: 'type100', component: 'Type100', title: '歌手' },
        { path: 'type10', component: 'Type10', title: '专辑', },
        { path: 'songs/:id', component: 'Songs', title: '专辑/歌单' },
        { path: 'type1014', component: 'Type1014', title: '视频' },
        { path: 'type1000', component: 'Type1000', title: '歌单' },
        { path: 'playlist/:id', component: 'Playlist', title: '歌单' },
        { path: 'type1002', component: 'Type1002', title: '用户' },
        { path: 'user/:uid', component: 'User', title: '歌单' },
        { path: 'type1004', component: 'Type1004', title: 'MV' },
        { path: 'type1006', component: 'Type1006', title: '歌词' },
        { path: 'type1009', component: 'Type1009', title: '电台' },
        { path: 'type2000', component: 'Type2000', title: '声音' },
      ]
    },
    {
      path: '/',
      // index ,
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
    { path: '/Likemusic', component: 'chenqian/Likemusic', title: '我的喜欢' },
    { path: '/Recentmusic', component: 'chenqian/Recentmusic', title: '最近播放' },
    { path: '/Gedan', component: 'chenqian/Gedan', title: '歌单' },
    { path: '/Singple', component: 'chenqian/Singple', title: '个人主页' },
    { path: '/pinglun', component: 'xujiapeng/pinglun',title:'评论' },
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

