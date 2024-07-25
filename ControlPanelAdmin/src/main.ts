import Koa from 'koa'
import cors from 'koa2-cors'
import bodyparser from 'koa-bodyparser'
import json from 'koa-json'
import logger from 'koa-logger'
import { server } from './model/server.js'
import admin from './router/admin.js'
import { authMiddleware } from './router/middleware.js'
const { port, IP } = await server.findPORT()
export const app = new Koa();
app.use(logger())
app.use(cors())
app.use(bodyparser())
app.use(json())
app.use(admin.routes()).use(admin.allowedMethods())
app.use(authMiddleware)
const ip = IP.replace('http://', '')
    .replace('https://', '')
app.listen(port, ip, () => console.log(`http://${ip}:${port}`))