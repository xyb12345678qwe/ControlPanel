import koaRouter from 'koa-router';
import Koa from 'koa'
const router = new koaRouter({ prefix: '/admin' });
import { verifyToken } from './middleware.js'

/**
 * 解token
 */
router.post('/verifyToken', async (ctx: Koa.Context) => {
    const { token, secretKey } = ctx.request.body as any;
    const result = verifyToken(token, secretKey);
    ctx.body = {
        code: 200,
        msg: "success",
        data: result
    };
})

export default router