import {request} from './http.js'

export function test(data){
    return request({
        url:'/user/login',
        method:'post',
        data
    })
}