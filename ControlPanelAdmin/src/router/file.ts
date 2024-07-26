import koaRouter from 'koa-router';
import Koa from 'koa'
import { File } from '../model/index.js';
const router = new koaRouter({ prefix: '/file' });
router.post('/read', async (ctx: Koa.Context) => {
    const { key } = ctx.request.body as any
    if (!Object.keys(File.get('filePath')).includes(key)) {
        ctx.body = { code: 401, msg: '文件不存在', data: undefined }
        return
    } else {
        ctx.body = { code: 200, msg: '文件读取成功', data: File.readFile(key) }
    }
})
export default router