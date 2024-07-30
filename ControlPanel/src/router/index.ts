import Login from '../App/login/Login.vue'
import Home from '../App/home/index.vue'
import AddMaster from '../App/layout/AddMaster.vue'
import AddRobot from '../App/layout/AddRobot.vue'
import SubMaster from '../App/layout/SubMaster.vue'
import UpdatePort from '../App/layout/UpdatePort.vue'
import UpdateRobot from '../App/layout/UpdateRobot.vue'
import NotFound from '../App/notfound/index.vue'
import { createRouter, createWebHistory, RouterOptions } from "vue-router";
const routes = [
    {
        path: '/login',
        component: Login
    },
    {
        path: '/',
        component: Home,
        redirect: '/login',
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
const authURL = ['/pay', 'addMaster', 'updateRobot', 'login'] // 全局保护索引
router.beforeEach((to, from, next) => {
    const token = localStorage.getItem("token")
    console.log(token);

    if (!authURL.includes(to.path)) {
        next()
        return
    } else {
        if (token) {
            next()
        } else {
            next('/login')
        }
    }
})
export default router