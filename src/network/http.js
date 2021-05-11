import axios from 'axios'
import qs from 'qs'

export function request(config){
    const instance = axios.create({
        //baseURL:'http://localhost:3001/api/v1',
       baseURL:'http://blog.wmyy.fun/api/v1',
       timeout:5000   
    })
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