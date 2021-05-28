import { defineConfig } from 'umi';
// import routes from './src/routes';
// export default defineConfig({
//   nodeModulesTransform: {
//     type: 'none',
//   },
//   routes,
//   fastRefresh: {},
//   history: {
//     type: 'hash',
//   },
//   layout: {
//     type: 'slide',
//   },
//   locale: {
//     // default zh-CN
//     default: 'zh-CN',
//     antd: true,
//     // default true, when it is true, will use `navigator.language` overwrite default
//     baseNavigator: true,
//   },
// });
export default defineConfig({
  nodeModulesTransform: { type: 'none' },
  layout: { name: '质量保障', locale: false },
  history: {
    type: 'hash',
  },
  locale: {
    // default zh-CN
    default: 'zh-CN',
    antd: true,
    // default true, when it is true, will use `navigator.language` overwrite default
    baseNavigator: true,
  },
  routes: [
    {
      path: '/login',
      component: '@/pages/Login',
      layout: false,
    },
    {
      path: '/',
      component: '@/layouts/index',
    },
    {
      path: '/home',
      name: '数据统计',
      icon: 'dashboard',
      routes: [
        {
          path: '/home/child',
          icon: 'dashboard',
          name: '分析页',
          component: '@/pages/Home/Child',
        },
      ],
    },
    {
      path: '/admin',
      name: '权限',
      icon: 'AppstoreAddOutlined',
      component: '@/pages/Admin/',
    },
    { component: '@/pages/404' },
  ],
});
