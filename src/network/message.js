import {request} from './http.js'

export function getMessageApi(query){
    return request({
        url:`message`,
        method:'get',
        params:query
    })
}

export function addMessageApi(data){
    return request({
        url:'message',
        method:'post',
        data
    })
}