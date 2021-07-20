import {ElMessage} from 'element-plus'

export function message(options){
    return ElMessage(options)
}

export function success(message){
    return ElMessage.success(message)
}

export function error(message){
    return ElMessage.error(message)
}

export function warning(message){
    return ElMessage.warning(message)
}