import { find } from 'lodash'
import Vue from 'vue'
import { RouteConfig, Direction } from '.'
import Router from 'vue-router'

export const CustomRoutes: RouteConfig[] = [
    {
        path: '/',
        meta: { direction: Direction.Home },
        component: () => import('@/views/pages/Home.vue'),
    },
    {
        path: '/aes',
        meta: { direction: Direction.Aes, title: "Aes解密" },
        component: () => import('@/views/pages/Aes/index.vue'),
    },
]

const routerPush = Router.prototype.push
Router.prototype.push = function push(location) {
    return (routerPush.call(this, location) as any).catch((error: any) => error)
}

Vue.prototype.go = function(direction: Direction) {
    const path =
        find(CustomRoutes, (e) => {
            return e.meta.direction == direction
        })?.path || ''
    const vue = this as any
    return vue.$router.push(path)
}
