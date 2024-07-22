import jwt from 'jsonwebtoken'
import { File } from '../model/file.js'
/**
 * 生成 JWT
 * @param payload
 * @returns
 */
export const generateToken = (payload, secretKey: string) => {
    return jwt.sign(payload, secretKey, { expiresIn: '1h' })
}

/**
 * 验证 JWT
 * @param token
 * @returns
 */
export const verifyToken = (token: string, secretKey: string) => {
    return jwt.verify(token, secretKey)
}

/**
 * 身份验证中间件
 * @param ctx
 * @param next
 */
export const authMiddleware = async (ctx, next) => {
    if (ctx.path === '/admin/login') {
        const token = ctx.cookies.get('admin_login_token');
        if (token) {
            const SECRET_KEY = (File.readFile('key')).ADMINLOGINKEY
            const decoded = verifyToken(token, SECRET_KEY);
            ctx.state.user = decoded; // 将解码后的用户信息存储在 ctx.state 中
            ctx.body = `<h1>hello,world</h1>`
        } else {
            await next()
        }
    } else {
        await next()
    }
}