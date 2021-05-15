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

//register

export function registerApi(registerData){
    return request({
        url:'/user/register',
        method:'post',
        data:registerData
    })
}

//forget

export function forgetApi(data){
    return request({
        url:'/user/forget',
        method:'post',
        data:{
            email:data.email,
            password:data.newPassword
        }
    })
}