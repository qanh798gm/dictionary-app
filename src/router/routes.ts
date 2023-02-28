import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('src/pages/main/MainLayout.vue'),
    children: [
      {
        path: 'vocabulary-list',
        component: () => import('src/pages/main/vocabulary/VocabularyList.vue'),
        meta: { requiresAuth: true },
      },
      {
        path: 'vocabulary-add',
        component: () => import('src/pages/main/vocabulary/VocabularyAdd.vue'),
        meta: { requiresAuth: true },
      },
      {
        path: 'vocabulary-edit',
        component: () => import('src/pages/main/vocabulary/VocabularyEdit.vue'),
        meta: { requiresAuth: true },
      },
    ],
    meta: { requiresAuth: true },
  },
  {
    path: '/login',
    component: () => import('pages/auth/Login.vue'),
  },
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
