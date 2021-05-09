import {ElButton,ElContainer,ElAside,ElMain,ElHeader,ElFooter,ElIcon,ElMenu,ElMenuItem,ElSubmenu,ElScrollbar,ElRow,ElCol,ElTag,ElMessage,ElLoading,ElBacktop} from 'element-plus'

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
    ElTag,
    ElBacktop
]
const plugins = [
    ElLoading,
    ElMessage,
  ]


export default (app)=>{
    components.forEach(item=>{
        app.component(item.name,item)
    })
    plugins.forEach(plugin=>{
        app.use(plugin)
    })
}