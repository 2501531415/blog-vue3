import {request} from './http.js'

export function getComment(article_id){
    return request({
        url:`comments/${article_id}`,
        method:'get'
    })
}