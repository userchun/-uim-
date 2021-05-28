const routes = [
  {
    path: '/login',
    component: '@/pages/Login',
    title: 'login',
    layout: false,
  },
  {
    path: '/',
    component: '@/layouts/index',
    routes: [
      {
        path: '/',
        exact: true,
        redirect: '/home',
      },
      {
        path: '/home',
        component: '@/pages/home',
      },
      {
        path: '/admin',
        component: '@/pages/Admin',
        title: 'admin',
        key: 'admin',
        menu: {
          title: '首页',
        },
      },
      {
        path: '/test',
        component: '@/pages/Test',
        title: 'admin',
        key: 'admin',
      },
    ],
  },
  { component: '@/pages/404' },
];

export default routes;
