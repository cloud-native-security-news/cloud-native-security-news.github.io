import {createRouter, createWebHistory, Router, RouteRecordRaw} from 'vue-router'
import ResearcherItem from "@/components/researcher/ResearcherItem.vue";
import Researchers from "@/components/researcher/Researchers.vue";
import News from "@/components/news/News.vue";
import Index from "@/components/layout/Index.vue";

const routes: RouteRecordRaw[] = [
    {path: '/', component: Index},
    {path: '/news/', component: News},
    {path: '/researcher', component: Researchers},
    {path: '/researcher/:researcher_id', component: ResearcherItem, props: true},
]

function removePrefix(str: string, prefix: string): string {
    if (str.startsWith(prefix)) {
        return str.slice(prefix.length);
    }
    return str;
}

const pass: string[] = []

const modules: Record<string, any> = import.meta.glob("./markdown/**/*.md", {eager: true})
Object.entries(modules).forEach(([key, module]) => {
    const path = removePrefix(key, "./markdown")
    if (!pass.includes(path)) {
        routes.push({
            path: path,
            components: {markdown: module.default},
        })
    }
})

const router: Router = createRouter({
    history: createWebHistory(),
    // history: createWebHashHistory(),
    routes,
})

export {router}