// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import Introductionpage from '../components/introductionPage.vue';
import HomePage from '../components/homePage.vue';
import AllBooksPage from '../components/allBooksPage.vue';

const routes = [
  {
    path: '/',
    name: 'Introductionpage',
    component: Introductionpage
  },
  {
    path: '/HomePage',
    name: 'HomePage',
    component: HomePage
  },
  {
    path: '/AllBooksPage',
    name: 'AllBooksPage',
    component: AllBooksPage
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
