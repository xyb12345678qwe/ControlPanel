import request from "@/utils/request";

export const updatePort = async (port : string) => {
    const res = await request.post('/admin/updatePort',{
        port : port
    })
    return res
}

export const addMaster = async (qq : string) => {
    const res = await request.post('/admin/addMaster',{
        qq : qq
    })
    return res
}
export const subMaster = async (qq : string) => {
    const res = await request.post('/admin/subMaster',{
        qq : qq
    })
    return res
}