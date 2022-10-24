import {createRouter, createWebHistory} from 'vue-router'
import Layout from "@/layout/index.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'Root',
            component: Layout,
            redirect: '/home',
            children: [
                {
                    path: '/home',
                    name: 'Home',
                    component: () => import('@/views/home/index.vue'),
                },
            ]
        },
    ]
})

export default router
