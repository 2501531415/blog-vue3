import axios from 'axios'
import qs from 'qs'
import {httpConfig} from '@/config/config.js'

export function request(config){
    const instance = axios.create(httpConfig)
    //interceptor request
    instance.interceptors.request.use(config=>{
        config.data = qs.stringify(config.data)
        return config
    })

    //interceptor response

    instance.interceptors.response.use(res=>{
        return res.data
    })

    return instance(config)
}