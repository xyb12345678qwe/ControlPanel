import koaRouter from 'koa-router';
import Koa from 'koa'
import { DirPath } from '../../../../../config.js';
import path from 'path'
import { File } from '../model/index.js';
import { generateToken } from './middleware.js'
const router = new koaRouter({ prefix: '/admin' });


/**
 * 登录
 */
router.post('/login', async (ctx: Koa.Context) => {
    const { name, password } = ctx.request.body as { name: string, password: string };
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
/**
 * 增加主人
 */
router.post('/addMaster', async (ctx: Koa.Context) => {
    const { qq } = ctx.request.body as { qq: string };
    const url = path.join(DirPath, 'config', 'master', 'master.yaml')
    const config = File.readFileByUrl(url) as any
    const masters = config.masters as any
    if (masters.includes(qq)) {
        ctx.body = { code: 401, msg: '该QQ已存在' }
    } else {
        masters.push(qq)
        File.writeFileByUrl(url, masters)
        ctx.body = { code: 200, msg: '添加成功' }
    }
    return;
})
/**
 * 减少主人
 */
router.post('/subMaster', async (ctx: Koa.Context) => {
    const { qq } = ctx.request.body as { qq: string };
    const url = path.join(DirPath, 'config', 'master', 'master.yaml')
    const config = File.readFileByUrl(url) as any
    const masters = config.masters as []
    masters.filter(item => item !== qq)
    File.writeFileByUrl(url, masters)
    ctx.body = { code: 200, msg: '减少成功' }
    return;
})
/**
 * 增加机器人配置
 */
router.post('/addRobot', async (ctx: Koa.Context) => {
    const { botType, configName, appID, token, secret, } = ctx.request.body as { botType: string, appID: string, token: string, secret: string, configName: string };
    const url = path.join(DirPath, 'config', 'config.yaml')
    let config = File.readFileByUrl(url) as any
    if (!configName) {
        ctx.body = { code: 401, msg: '参数不能为空' }
    }
    if (botType == 'ntqq') {
        if (!appID || !token || !secret) {
            ctx.body = { code: 401, msg: '参数不能为空' }
            return;
        }
        config[configName][botType] = { appID, token, secret }
        File.writeFileByUrl(url, config)
    } else if (botType == 'kook') {
        if (!token) {
            ctx.body = { code: 401, msg: '参数不能为空' }
            return;
        }
        config[configName][botType] = { token }
    } else {
        config[configName][botType] = {}
    }
})
router.post('/updatePort', async (ctx: Koa.Context) => {
    const { port } = ctx.request.body as { port: string };
    const url = path.join(DirPath, 'config', 'server', 'server.yaml')
    if (!port) {
        ctx.body = { code: 401, msg: '参数不能为空' }
        return;
    }
    let config = File.readFileByUrl(url) as any
    config.port = port
    File.writeFileByUrl(url, config)
    ctx.body = { code: 200, msg: '修改成功' }
    return;
})
export default router;