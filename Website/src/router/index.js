import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue';
import Items from '../components/Items.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/items',
      name: 'items',
      component: Items,
    },
    /*{
      path: '/items',
      name: 'items',
      component: Items,
      children: [         
        {
          path: '/:category',
          name: 'item',
          component: ItemsCategory
        },
        {
          path: '/:name/:id',
          name: 'item',
          component: Item
        }
      ]
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
    }*/
  ]
})

export default router
