import type {RouteRecordRaw} from 'vue-router'
import {createRouter, createWebHistory} from 'vue-router'
import Layout from "@/layout/index.vue";

export const routes: RouteRecordRaw[] = [
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
                meta: {
                    title: '主页'
                },
            },
        ]
    },
    {
        path: '/multi',
        name: 'MultiMenu',
        component: Layout,
        redirect: '/multi/menu_1',
        meta: {
            title: '多级菜单'
        },
        children: [
            {
                path: '/multi/menu_1',
                name: 'MenuOne',
                component: () => import('@/views/multi/menu1.vue'),
                meta: {
                    title: '菜单一'
                },
            },
            {
                path: '/multi/menu_2',
                name: 'MenuTwo',
                component: () => import('@/views/multi/menu2.vue'),
                meta: {
                    title: '菜单二'
                },
            },
        ]
    },
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: routes,
})

export default router
