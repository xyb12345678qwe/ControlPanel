import request from "../utils/request.js";

export const login = (username: string, password: string) => {
    console.log(username)
    console.log(password)
    return request.post('/admin/login', {
        name: username,
        password: password
    })
}