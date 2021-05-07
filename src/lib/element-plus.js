import {ElButton,ElContainer,ElAside,ElMain,ElHeader,ElFooter,ElIcon,ElMenu,ElMenuItem,ElSubmenu} from 'element-plus'

const components = [
    ElButton,
    ElContainer,
    ElAside,
    ElMain,
    ElHeader,
    ElFooter,
    ElIcon,
    ElMenu,
    ElMenuItem,
    ElSubmenu
]

export default (app)=>{
    components.forEach(item=>{
        app.component(item.name,item)
    })
}