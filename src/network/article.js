import {request} from './http'

export function getArticle(){
    return request({
        url:'/article',
        method:'get'
    })
}

export function getArticleDetail(id){
    return request({
        url:`article/detail/${id}`,
        method:'get'
    })
}

export function getLearnDetail(id){
    return request({
        url:`learn/detail/${id}`,
        method:'get'
    })
}

export function getLearnAll(){
    return request({
        url:'learn/all',
        method:'get'
    })
}

export function getLearnNav(){
    return request({
        url:'learn/nav',
        method:'get'
    })
}

export function getLearnType(type){
    return request({
        url:`learn/${type}`,
        method:'get'
    })
}