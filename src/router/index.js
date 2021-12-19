import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'HomePage',
        component: () => import('../views/index.vue')
    },
    {
        path: '/render',
        name: 'RenderPage',
        component: () => import('../views/render.vue')
    },
]

const router = new VueRouter({routes})

export default router