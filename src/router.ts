import {createRouter, createWebHistory, Router, RouteRecordRaw} from 'vue-router'
import ResearcherItem from "@/components/researcher/ResearcherItem.vue";
import Researchers from "@/components/researcher/Researchers.vue";

const routes: RouteRecordRaw[] = [
    {path: '/', component: Researchers},
    {path: '/researcher/:researcher_id', component: ResearcherItem, props: true},
]

const router: Router = createRouter({
    history: createWebHistory(),
    // history: createWebHashHistory(),
    routes,
})

export {router}