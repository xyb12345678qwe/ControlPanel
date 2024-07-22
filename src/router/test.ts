import koaRouter from 'koa-router';
import Koa from 'koa'
import TEST from '../components/test.js'
import { reactHtml } from '../model/index.js';

const router = new koaRouter();
router.get('/test', async (ctx: Koa.Context) => {
    const html = reactHtml.render(TEST, {});
    ctx.body = html
});
export default router;