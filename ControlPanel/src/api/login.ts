import request from "../utils/request.js";

export const login = (username: string, password: string) => {
    return request({
        url: '',
        params: {
            username: username,
            password: password
        }
    })
}