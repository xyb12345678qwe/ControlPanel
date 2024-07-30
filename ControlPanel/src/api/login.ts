import request from "../utils/request.js";

export const login = async (username: string, password: string) => {
    const res = await request.post('/admin/login', {
        name: username,
        password: password
    })
    console.log(res);
    return res
}