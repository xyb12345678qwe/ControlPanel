import koaRouter from 'koa-router';
import jwt from 'jsonwebtoken';
import Koa from 'koa'
// import cookies from 'koa-cookie';
import { File } from '../model/index.js'
const router = new koaRouter({ prefix: '/admin' });
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
    // 将 token 存储在 cookie 中
    ctx.cookies.set('admin_login_token', token, {
        httpOnly: true, // 防止客户端 JavaScript 访问
        maxAge: 24 * 60 * 60 * 1000, // 24小时（单位：毫秒）
        secure: process.env.NODE_ENV === 'production', // 在生产环境中启用 HTTPS
        sameSite: 'lax', // 防止跨站请求伪造（CSRF）攻击
    });
    ctx.body = { code: 200, msg: '登录成功', token }
})
export default router;