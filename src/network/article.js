import {request} from './http'

export function getArticle(params){
    return request({
        url:'/article',
        method:'get',
        params
    })
}

export function getArticleDetail(id,userId){
    return request({
        url:`article/detail/${id}`,
        method:'get',
        params:{
            user_id:userId?userId:null
        }
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

//点赞

export function postLike(type,data){
    return request({
        url:`comments/likes/${type}`,
        method:'post',
        data
    })
}

//获取点赞状态 

export function ifLikedApi(params){
    return request({
        url:'comments/liked',
        method:'get',
        params
    })
}

//search

export function search(data){
    return request({
        url:'article/search',
        method:'post',
        data
    })
}

//views
export function views(type,data){
    return request({
        url:`learn/views/${type}`,
        method:'post',
        data
    })
}