import {createRouter, createWebHistory, Router, RouteRecordRaw} from 'vue-router'
import Github from "@/components/Github.vue";
import HelloWorld from "@/components/HelloWorld.vue";

const routes: RouteRecordRaw[] = [
    {path: '/github', component: Github},
    {path: '/hello', component: HelloWorld},
]

const router: Router = createRouter({
    history: createWebHistory(),
    // history: createWebHashHistory(),
    routes,
})

export {router}