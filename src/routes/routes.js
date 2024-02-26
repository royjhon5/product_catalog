import { createRouter, createWebHistory } from "vue-router";

const routes = [
    { path: '/', redirect: '/products' },
    { path: '/products', component: () => import('@/views/ProductList.vue') },
    { path: '/products/:id', name: 'ProductDetails', component: () => import('@/views/ProductDetails.vue'), props: true }
  ];
  
const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router