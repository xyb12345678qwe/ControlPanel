import jwt from 'jsonwebtoken'
/**
 * 生成 JWT
 * @param payload
 * @returns
 */
export const generateToken = (payload: any, secretKey: string, expiresIn = '24h') => {
    return jwt.sign(payload, secretKey, { expiresIn })
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
export const authMiddleware = async (ctx: any, next: any) => {
    if (ctx.path !== '/admin/login') {
        const token = ctx.request.headers["authorization"];
        if (!token) {
            ctx.body = {
                code: 401,
                message: '未登录'
            }
            return
        }
    } else {
        await next()
    }
}