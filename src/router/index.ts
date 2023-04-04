import {createRouter, createWebHistory} from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/elite-aktive',
      name: 'elite-aktive',
      component: () => import('../views/eliteView.vue')
    },
    {
      path: '/klub-rekorder',
      name: 'klub-rekoder',
      component: () => import('../views/rekorderView.vue')
    },
    {
      path: '/bestyrelse',
      name: 'bestyrelse',
      component: () => import('../views/bestyrelseView.vue')
    },
    {
      path: '/hold',
      name: 'hold',
      component: () => import('../views/holdView.vue')
    },
  ],
});

export default router;
