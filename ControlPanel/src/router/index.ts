import Login from '../App/Login.vue'
import { createRouter, createWebHistory, RouterOptions } from "vue-router";
const routes = [
    {
        path: '/',
        component: Login
    }
]
const router = createRouter(<RouterOptions>{
    history: createWebHistory(),
    routes
})
export default router