import {request} from './http.js'

export function login(data){
    return request({
        url:'/user/login',
        method:'post',
        data
    })
}

//admin info

export function introduce(){
    return request({
        url:'/introduce',
        method:'get'
    })
}