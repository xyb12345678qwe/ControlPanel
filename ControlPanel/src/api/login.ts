import request from "../utils/request.js";

export const login = (username: string, password: string) => {
    return request.post('/admin/login', {
        name: username,
        password: password
    })
}