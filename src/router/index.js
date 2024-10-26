import { createRouter, createWebHistory } from 'vue-router';
import homePage from '@/components/homePage.vue';
// import About from '../views/About.vue';
// import Contact from '../views/Contact.vue';

const routes = [
    { path: '/home', component: homePage }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
