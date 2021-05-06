import {ElButton} from 'element-plus'

const components = [
    ElButton
]

export default (app)=>{
    components.forEach(item=>{
        app.component(item.name,item)
    })
}