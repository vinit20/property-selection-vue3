import { createRouter, createWebHistory } from 'vue-router';
import LocationSelection from '../pages/LocationSelection.vue';
import Cart from '../pages/CartPage.vue';

const routes = [
  {
    path: '/',
    name: 'LocationSelection',
    component: LocationSelection
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;