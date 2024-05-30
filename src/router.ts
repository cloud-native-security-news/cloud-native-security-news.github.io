import {createRouter, createWebHistory, Router, RouteRecordRaw} from 'vue-router'
import Github from "@/components/Github.vue";

const routes: RouteRecordRaw[] = [
    {path: '/github', component: Github},
]

const router: Router = createRouter({
    history: createWebHistory(),
    routes,
})

export {router}