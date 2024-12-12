// src/router/index.js
import HomePage from '../components/homePage.vue';
import bookViewPage from '../components/bookViewPage.vue';
import AllBooksPage from '../components/allBooksPage.vue';
import viewListUser from '../components/viewListUser.vue';
import { createRouter, createWebHistory } from 'vue-router';
import Introductionpage from '../components/introductionPage.vue';

const routes = [
  {
    path: '/',
    name: 'Introductionpage',
    component: Introductionpage
  },
  {
    path: '/HomePage',
    name: 'HomePage',
    component: HomePage,
    props:true
  },
  {
    path: '/AllBooksPage',
    name: 'AllBooksPage',
    component: AllBooksPage
  },
  {
    path: '/bookView',
    name: 'bookView',
    component: bookViewPage
  },
  {
    path: '/listUser',
    name: 'viewListUser',
    component: viewListUser
  },
  
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
