import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue';
import Items from '../components/Items.vue';
import Item from '../components/Item.vue';
import Cart from '../components/Cart.vue';
import ThankYou from '../components/ThankYou.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: HomeView
    },
    {
      path: '/items',
      component: Items,
    },
    {
      path: '/items/:name/:id',
      component: Item
    },     
    {
      path: '/items/:category',
      component: Items
    },
    {
      path: '/cart',
      name: 'cart',
      component: Cart
    },
    {
      path: '/thank-you',
      name: 'thank-you',
      component: ThankYou
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  },
})

export default router
