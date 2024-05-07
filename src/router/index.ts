import store from '@/store'
import { RootStore } from '@/store/model'
import { find, get } from 'lodash'
import Vue from 'vue'
import VueRouter, { RouteConfig as VueRouteConfig } from 'vue-router'
import { Direction, RouterMenu, } from './direction'
import { CustomRoutes } from './route'

export type RouteConfig = VueRouteConfig & {
    meta: {
        direction: Direction
        title?: string
        icon?: string
    }
    children?: RouteConfig[]
}

Vue.use(VueRouter)
const routes: RouteConfig[] = [...CustomRoutes]
const base =
    process.env.NODE_ENV === "production"
        ? `${process.env.VUE_APP_BASE_ROUTER_URL || ""}`
        : `/`
console.log('base', base);
const router = new VueRouter({
    mode: 'history',
    base: base,
    routes,
})

console.log(process.env)
router.beforeEach((to, from, next) => {
    const direction = get(to, 'meta.direction')
    const title = find(RouterMenu, e => e.direction === direction)?.label
    if (title) {
        store.commit(RootStore.updateGlobalTitle, title)
    }
    console.log('to', JSON.parse(JSON.stringify(to)));
    if (localStorage.getItem("isManage") !== "true") {
        setTimeout(() => {
            console.clear()
        }, 0);
    }
    next()
})

export default router

export { Direction }
