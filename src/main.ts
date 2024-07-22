import Koa from 'koa'
import cors from 'koa2-cors'
import bodyparser from 'koa-bodyparser'
import json from 'koa-json'
import logger from 'koa-logger'
import { server } from './model/server.js'
import TEST from './router/test.js'
import { authMiddleware } from './router/middleware.js'
import admin from './router/admin.js'
export const app = new Koa();
app.use(cors()).use(bodyparser()).use(json()).use(logger()).use(authMiddleware).use(admin.routes()).use(admin.allowedMethods())
app.use(TEST.routes()).use(TEST.allowedMethods())
const { port: PORT, IP } = await server.findPORT()
const ip = IP.replace('http://', '')
    .replace('https://', '')
app.listen(PORT, ip, () => {
    console.log(server.getIP());
});