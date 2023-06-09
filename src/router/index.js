import { createRouter, createWebHistory } from 'vue-router'

import About from '/src/components/About.vue'

const routes = [

    {
        path: '/about',
        name: 'About',
        component: About,
    },
]
const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
