import {request} from './http.js'

export function getComment(article_id){
    return request({
        url:`comments/list/${article_id}`,
        method:'get'
    })
}

export function postComment(comments){
    return request({
        url:`comments`,
        method:'post',
        data:comments
    })
}

export function secondComment(comments){
    return request({
        url:'comments/second',
        method:'post',
        data:comments
    })
}