import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home-page',
      redirect: { name: 'form-page' },
    },
    {
      path: '/form',
      name: 'form-page',
      component: () => import('../views/FormView.vue'),
    },
    {
      path: '/blocks',
      name: 'blocks-page',
      component: () => import('../views/BlocksView.vue'),
    },
  ],
});

export default router;
