import {ElButton,ElContainer,ElAside,ElMain,ElHeader,ElFooter,ElIcon,ElMenu,ElMenuItem,ElSubmenu,ElScrollbar,ElRow,ElCol,ElTag} from 'element-plus'

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
    ElSubmenu,
    ElScrollbar,
    ElRow,
    ElCol,
    ElTag
]

export default (app)=>{
    components.forEach(item=>{
        app.component(item.name,item)
    })
}