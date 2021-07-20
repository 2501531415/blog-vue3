import {request} from './http.js'

export function getMessageApi(){
    return request({
        url:`message`,
        method:'get'
    })
}

export function addMessageApi(data){
    return request({
        url:'message',
        method:'post',
        data
    })
}