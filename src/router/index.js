import { createRouter, createWebHistory } from 'vue-router';
import main from '../pages/MainPage.vue';
import gifts from '../pages/GiftPage.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: main,
        },
        {
            path: '/gifts',
            name: ' gifts',
            component: gifts,
            props: true
        }
    ],
});

export default router;
