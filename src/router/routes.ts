import { RouteRecordRaw } from 'vue-router';
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/layout/MainLayout.vue'),
    children: [
      {
        path: '/',
        component: () => import('@/views/BoardView.vue'),
      },
      {
        path: '/write',
        component: () => import('@/views/PostWriteView.vue'),
      },
      {
        path: '/post/:id',
        component: () => import('@/views/PostView.vue'),
      },
      {
        path: '/edit/:id',
        component: () => import('@/views/EditView.vue'),
      },
    ],
  },
];
export default routes;
