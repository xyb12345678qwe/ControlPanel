import koaRouter from 'koa-router';
import Koa from 'koa'
import { File } from '../model/index.js';
import { generateToken } from './middleware.js'
const router = new koaRouter({ prefix: '/admin' });

router.post('/login', async (ctx: Koa.Context) => {
    const { name, password } = ctx.request.body as any;
    if (!name || !password) {
        ctx.body = {
            code: 401,
            msg: '用户名或密码不能为空'
        }
        return;
    }
    const key = (File.get('key') as any).ADMINLOGINKEY
    const admins = File.readFile('admin') as any
    const admin = admins.find((item: any) => item.name === name && item.password === password);
    if (!admin) {
        ctx.body = { code: 401, msg: '用户名或密码错误' }
        return;
    }
    const token = generateToken({ name, password }, key)
    // const token = jwt.sign({ name, password }, key, { expiresIn: '24h' });
    ctx.body = { code: 200, msg: '登录成功', token }
})
export default router;