import koaRouter from 'koa-router';
import jwt from 'jsonwebtoken';
import Koa from 'koa'
// import cookies from 'koa-cookie';
import { File } from '../model/index.js'
const router = new koaRouter({ prefix: '/admin' });
router.get('/login', async (ctx: Koa.Context) => {
    ctx.body = { code: 200, msg: '登录页面' }
})
router.post('/login', async (ctx: Koa.Context) => {
    const { name, password } = ctx.request.body;
    if (!name || !password) {
        ctx.body = {
            code: 401,
            msg: '用户名或密码不能为空'
        }
        return;
    }
    const key = (File.readFile('key')).ADMINLOGINKEY
    const admins = File.readFile('admin')
    const admin = admins.find((item: any) => item.name === name && item.password === password);
    if (!admin) {
        ctx.body = { code: 401, msg: '用户名或密码错误' }
        return;
    }
    const token = jwt.sign({ name, password }, key, { expiresIn: '24h' });
    ctx.body = { code: 200, msg: '登录成功', token }
})
export default router;