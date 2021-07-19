import {request} from './http.js'

export function getMessage(){
    return request({
        url:`message`,
        method:'get'
    })
}