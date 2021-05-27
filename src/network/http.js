import axios from 'axios'
import qs from 'qs'
import {ElMessage} from 'element-plus'

export function request(config){
    const instance = axios.create({
        //baseURL:'http://192.168.47.1:3001/api/v1',
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
        //console.log(res.data)
        // if(res.data.err_code == 400)
        return res.data
    })

    return instance(config)
}