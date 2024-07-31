import Login from '../App/login/Login.vue'
import Home from '../App/home/index.vue'
import AddMaster from '../App/layout/AddMaster.vue'
import AddRobot from '../App/layout/AddRobot.vue'
import SubMaster from '../App/layout/SubMaster.vue'
import UpdatePort from '../App/layout/UpdatePort.vue'
import UpdateRobot from '../App/layout/UpdateRobot.vue'
import UpdatePassword from '../App/layout/UpdatePassword.vue'
import Index from '../App/layout/Home.vue'
import NotFound from '../App/notfound/index.vue'
import authRule from '@/config'
import { createRouter, createWebHistory, RouterOptions } from "vue-router";
const routes = [
    {
        path: '/',
        component: Login
    },
    {
        path: '/home',
        component: Home,
        redirect: '/index',
        children: [
            {
                path: '/addRobot',
                component: AddRobot
            },
            {
                path: '/updateRobot',
                component: UpdateRobot
            },
            {
                path: '/subMaster',
                component: SubMaster
            },
            {
                path: '/updatePort',
                component: UpdatePort
            },
            {
                path: '/addMaster',
                component: AddMaster
            },
            {
                path: '/updatePassword',
                component: UpdatePassword
            },
            {
                path: '/index',
                component: Index
            }
        ]
    },
    {
        path: '/:pathMatch(.*)*',
        component: NotFound // 当页面没找到时候
    }
]
const router = createRouter(<RouterOptions>{
    history: createWebHistory(),
    routes
})
router.beforeEach((to, from, next) => {
    const token = localStorage.getItem("token")
    if (!authRule.includes(to.path)) {
        next()
        return
    } else {
        if (token) {
            next()
        } else {
            next('/')
        }
    }
})
export default router